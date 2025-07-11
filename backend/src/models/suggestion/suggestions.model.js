const db = require('@database/database');
const Suggestion = require('./suggestion.model');
const { Roles } = require('@utils/constants');

class Suggestions {
    static dbRef = db.suggestions;


    /**
     * Retrieves all suggestions from the database.
     *
     * @returns {Promise<Suggestion[]>} An array of Suggestion instances.
     */
    static async getAll() {
        await this.dbRef.read();
        return this.dbRef.data.map(entry => new Suggestion(entry));
    }


    /**
     * Finds a suggestion by its unique ID.
     *
     * @param {string} id - The unique identifier of the suggestion.
     * @returns {Promise<Suggestion|null>} The Suggestion instance if found, otherwise null.
     */
    static async findById(id) {
        await this.dbRef.read();
        const entry = this.dbRef.data.find(s => s.id === id);
        return  entry ? new Suggestion(entry) : null;
    }


    /**
     * Retrieves all suggestions submitted by a specific community member.
     *
     * @param {string} id - The community member's unique ID.
     * @returns {Promise<any[]>} An array of mapped suggestion data for the community member.
     */
    static async getByCommunityMemberId(id) {
        await this.dbRef.read();
        const entries = this.dbRef.data.
        filter(s => s.submitter_id === id)
        .map(s => new Suggestion(s).toCommunityMember())
        return entries || []
    }



    /**
     * Retrieves all suggestions assigned to a specific associate editor.
     *
     * @param {string} id - The associate editor's unique ID.
     * @returns {Promise<any[]>} An array of mapped suggestion data for the associate editor.
     */
    static async getByAssociateEditor(id) {
        await this.dbRef.read();
        const entries = this.dbRef.data.
        filter(s => s.assigned_associate_editor === id)
        .map(s => new Suggestion(s).toAssociateEditor())
        return entries || []
    }



    /**
     * Retrieves all suggestions assigned to a specific reviewer.
     *
     * @param {string} id - The reviewer's unique ID.
     * @returns {Promise<any[]>} An array of mapped suggestion data for the reviewer.
     */
    static async getByReviewer(id) {
        await this.dbRef.read();
        const entries = this.dbRef.data.
        filter(s => s.assigned_reviewers.includes(id))
        .map(s => new Suggestion(s).toAssociateEditor())
        return entries || []
    }



    /**
     * Inserts a new suggestion into the database.
     *
     * @param {Object} data - The raw suggestion data.
     * @returns {Promise<Suggestion>} The newly created Suggestion instance.
     */
    static async insert(data) {
        const suggestion = new Suggestion({
            ...data,
        });

        await this.dbRef.read();
        this.dbRef.data.push(suggestion);
        await this.dbRef.write();

        return suggestion;
    }



    /**
     * Updates an existing suggestion in the database.
     *
     * @param {Suggestion} suggestionInstance - The Suggestion instance to update.
     * @returns {Promise<Suggestion>} The updated Suggestion instance.
     * @throws {Error} If the suggestion with the specified ID does not exist.
     */
    static async update(suggestionInstance) {
        await this.dbRef.read();

        const index = this.dbRef.data.findIndex(s => s.id === suggestionInstance.id);
        if (index === -1) throw new Error(`Suggestion with id ${suggestionInstance.id} not found`);

        this.dbRef.data[index] = suggestionInstance;
        await this.dbRef.write();

        return suggestionInstance;
    }




    /**
     * Deletes a suggestion by its unique ID.
     *
     * @param {string} id - The unique identifier of the suggestion to delete.
     * @returns {Promise<void>}
     */
    static async deleteById(id) {
        await this.dbRef.read();
        this.dbRef.data = this.dbRef.data.filter(s => s.id !== id);
        await this.dbRef.write();
    }
}

module.exports = Suggestions;
