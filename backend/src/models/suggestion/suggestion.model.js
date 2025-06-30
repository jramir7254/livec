const { generateSuggestionId } = require('@utils/generate-id'); // your ID util
const { Status, Step } = require('@constants'); // or wherever your role enum lives


class Suggestion {
    constructor(data) {
        this.id = data.id || generateSuggestionId(data.discipline);
        this.title = data.title;
        this.suggestion = data.suggestion || '';
        this.submitterId = data.submitterId;
        this.timeCreated = data.timeCreated || new Date().toISOString();
        this.status = data.status || { 'public': '', 'private': '' };
        this.discipline = data.discipline;
        this.assignedAssociateEditor = data.assignedAssociateEditor || '';
        this.assignedEditorInChief = data.assignedEditorInChief || '';
        this.assignedReviewers = data.assignedReviewers || [];
        this.meta = data.meta || {}
    }

    toCommunityMember() {
        return {
            id: this.id,
            title: this.title,
            suggestion: this.suggestion,
            timeCreated: this.timeCreated,
            status: this.status.public,
            discipline: this.discipline
        }
    }


    toAssociateEditor() {
        return {
            id: this.id,
            title: this.title,
            suggestion: this.suggestion,
            timeCreated: this.timeCreated,
            status: this.status.private,
            discipline: this.discipline,
            submitterId: this.submitterId,
            assignedAssociateEditor: this.assignedAssociateEditor,
            assignedEditorInChief: this.assignedEditorInChief || 'none',
            assignedReviewers: this.assignedReviewers || []
        }
    }

    addMeta(meta) {
        Object.assign(this.meta, meta);
    }


    updateStatus(status) {
        switch (status) {
            case Status.SUBMITTED:
                this.status = { 'public': Status.SUBMITTED, 'private': '' };
                break;
            case Status.ASSIGNED:
                this.status = { 'public': Status.ASSIGNED, 'private': Step.AWAITING_INITIAL_RESPONSE };
                break;
            case Status.REJECTED:
                this.status = { 'public': Status.REJECTED, 'private': Status.REJECTED };
                break;
            case Status.UNDER_REVIEW:
                this.status = { 'public': Status.UNDER_REVIEW, 'private': Step.REVIEWING };
                break;

        }
    }


    reject(rejecterId, reason, message) {
        if (this.status.public === Status.REJECTED) return

        this.updateStatus(Status.REJECTED)
        const rejectId = generateSuggestionId()
        this.addMeta({
            rejectedBy: rejecterId,
            rejectionReason: reason,
            publicMessage: message,
            timeRejected: new Date().toISOString(),
            rejectId
        });

        return rejectId
    }


    startReview(startedBy, notes, message) {
        if (this.status.public === Status.REJECTED) return

        this.updateStatus(Status.UNDER_REVIEW)
        const startId = generateSuggestionId()
        this.addMeta({
            startedBy: startedBy,
            initialNotes: notes,
            publicMessage: message,
            timeStarted: new Date().toISOString(),
            startId
        });

        return startId
    }


    assignAssociateEditor(associateEditor) {
        this.assignedAssociateEditor = associateEditor.id;
        this.assignedEditorInChief = associateEditor.assignedEditorInChief;
        this.updateStatus(Status.ASSIGNED)
    }

    assignReviewers(notes, message, newReviewers) {
        newReviewers.map(id => (
            !this.assignedReviewers.includes(id) && this.assignedReviewers.push(id)
        ))
        this.addMeta({
            initialNotes: notes,
            publicMessage: message,
            timeStarted: new Date().toISOString(),
        });

        this.updateStatus(Status.UNDER_REVIEW)
    }
}

module.exports = Suggestion