// models/suggestions/Suggestions.js
const db = require('@database/database');
const Suggestion = require('./suggestion.model');

class Suggestions {
    static dbRef = db.suggestions;

    static async getAll() {
        await this.dbRef.read();
        return this.dbRef.data.map(entry => new Suggestion(entry));
    }

    static async findById(id) {
        await this.dbRef.read();
        const entry = this.dbRef.data.find(s => s.id === id);
        return entry ? new Suggestion(entry) : null;
    }

    
    static async getByCommunityMemberId(id) {
        await this.dbRef.read();
        const entries = this.dbRef.data.
        filter(s => s.submitterId === id)
        .map(s => new Suggestion(s).toCommunityMember())
        return entries || []
    }

        
    static async getByAssociateEditor(id) {
        await this.dbRef.read();
        const entries = this.dbRef.data.
        filter(s => s.assignedAssociateEditor === id)
        .map(s => new Suggestion(s).toAssociateEditor())
        return entries || []
    }

    static async getByReviewer(id) {
        await this.dbRef.read();
        const entries = this.dbRef.data.
        filter(s => s.assignedReviewers.includes(id))
        .map(s => new Suggestion(s).toAssociateEditor())
        return entries || []
    }


    static async insert(data) {
        const suggestion = new Suggestion({
            ...data,
        });

        await this.dbRef.read();
        this.dbRef.data.push(suggestion);
        await this.dbRef.write();

        return suggestion;
    }

    static async update(suggestionInstance) {
        await this.dbRef.read();

        const index = this.dbRef.data.findIndex(s => s.id === suggestionInstance.id);
        if (index === -1) throw new Error(`Suggestion with id ${suggestionInstance.id} not found`);

        this.dbRef.data[index] = suggestionInstance;
        await this.dbRef.write();

        return suggestionInstance;
    }

    static async deleteById(id) {
        await this.dbRef.read();
        this.dbRef.data = this.dbRef.data.filter(s => s.id !== id);
        await this.dbRef.write();
    }
}

module.exports = Suggestions;
