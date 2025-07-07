// models/CommunityMember.js
const User = require('../user.model');
const { Roles } = require('@utils/constants');


class EditorInChief extends User {
    static role = Roles.EDITOR_IN_CHIEF;
    static roleKey = 'chiefEditors';

    constructor(data) {
        super(data)
        this.discipline = data.discipline || 'none';
        this.assignedAssociateEditors = data.assignedAssociateEditors || []
        this.assignedSuggestions = data.assignedSuggestions || [];
    }

    assignSuggestion(newSuggestionId) {
        this.assignedSuggestions.push(newSuggestionId)
    }

    toPublic() {
        return {
            ...super.toPublic(),
            suggestions: this.assignedSuggestions
        };
    }
}

module.exports = EditorInChief;