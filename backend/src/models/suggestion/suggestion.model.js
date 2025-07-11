const { generateSuggestionId } = require('@utils/generate-id');
const { Status, Step, Actions } = require('@utils/constants');
const Documentation = require('../util/documentation.model')
const PublicMessage = require('../util/public-message.model')


class Suggestion {

    constructor(data) {
        this.id = data.id || generateSuggestionId(data.discipline);
        this.title = data.title;
        this.suggestion = data.suggestion || '';

        this.submitter_id = data.submitter_id || data.submitterId;
        this.section_id = data.section_id || data.sectionId;
        this.time_created = data.time_created || data.timeCreated || new Date().toISOString();

        this.status = data.status || {
            public: Status.Public.SUBMITTED,
            private: '',
            system: Status.System.UNASSIGNED
        };

        this.discipline = data.discipline;

        this.assigned_associate_editor = data.assigned_associate_editor || data.assignedAssociateEditor;
        this.assigned_editor_in_chief = data.assigned_editor_in_chief || data.assignedEditorInChief;
        this.assigned_reviewers = data.assigned_reviewers || data.assignedReviewers || [];

        this.meta = data.meta || {};

        this.public_updates = data.public_updates || [new PublicMessage({
            status: Status.Public.SUBMITTED,
            author: 'System',
            message: 'Your suggestion has been submitted and we are finding an associate editor to review'
        })]
    }





    toCommunityMember() {
        return {
            id: this.id,
            title: this.title,
            suggestion: this.suggestion,
            sectionId: this.section_id,
            timeCreated: this.time_created,
            status: this.status.public,
            discipline: this.discipline,
            publicUpdates: this.public_updates,
        }
    }



    toAssociateEditor() {
        return {
            id: this.id,
            title: this.title,
            suggestion: this.suggestion,
            timeCreated: this.time_created,
            status: this.status.private,
            sectionId: this.section_id,
            discipline: this.discipline,
            submitterId: this.submitter_id,
            meta: this.meta,
            assignedAssociateEditor: this.assigned_associate_editor,
            assignedEditorInChief: this.assigned_editor_in_chief || 'none',
            assignedReviewers: this.assigned_reviewers || [],
            system: {
                status: this.status.system
            }
        }
    }




    addMeta(meta) {
        Object.assign(this.meta, meta);
    }





    _updateStatus(event) {

        switch (event) {

            case (Actions.ASSIGNED_ASSOCIATE_EDITOR): this.status = {
                'public': Status.Public.ASSIGNED,
                'private': Status.Private.AWAITING_INITIAL_RESPONSE,
                'system': Status.System.NEW
            };
                break;

            case (Actions.DESK_REJECT): this.status = {
                'public': Status.Public.REJECTED,
                'private': Status.Private.REJECTED,
                'system': Status.System.CLOSED
            };
                break;

            case Actions.START_REVIEW: this.status = {
                'public': Status.Public.UNDER_REVIEW,
                'private': Status.Private.REVIEWING,
                'system': Status.System.ACTIVE
            };
                break;
        }
    }





    reject(rejecterId, reason, message) {
        if (this.status.system === Status.System.CLOSED) return

        this._updateStatus(Actions.DESK_REJECT)
        const rejectId = generateSuggestionId()
        this.addMeta({
            rejected_by: rejecterId,
            rejection_reason: reason,
            public_message: message,
            time_rejected: new Date().toISOString(),
            reject_id: rejectId
        });

        this.public_updates.push(new PublicMessage({
            status: this.status.public,
            message,
            author: rejecterId
        }).toObject())

        return rejectId
    }





    insertDocumentation() {
        this.meta.documentation.push()
    }




    startReview(startedBy, notes, message) {
        if (this.status.system === Status.System.CLOSED) return;

        this._updateStatus(Actions.START_REVIEW);
        const start_id = generateSuggestionId();

        this.addMeta({
            started_by: startedBy,
            documentation: [new Documentation(startedBy, notes).toObject()],
            time_started: new Date().toISOString(),
 
        });

        this.public_updates.push(new PublicMessage({
            status: this.status.public,
            message,
            author: startedBy
        }).toObject())

        return "###-####";
    }




    assignAssociateEditor(associateEditor) {
        this.assigned_associate_editor = associateEditor.id;
        this.assigned_editor_in_chief = associateEditor.assignedEditorInChief;

        this._updateStatus(Actions.ASSIGNED_ASSOCIATE_EDITOR);

        this.public_updates.push(new PublicMessage({
            status: this.status.public,
            message: 'Your suggestion has been assigned to an associate editor for preliminary review.',
            author: 'System'
        }).toObject())
    }




    assignReviewers(notes, message, newReviewers) {
        newReviewers.map(id => (
            !this.assigned_reviewers.includes(id) && this.assigned_reviewers.push(id)
        ));

        this.addMeta({
            initial_notes: notes,
            public_message: message,
            time_started: new Date().toISOString(),
        });

        this._updateStatus(Actions.ASSIGNED_REVIEWERS);
    }
}




module.exports = Suggestion