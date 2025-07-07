const { generateRandomId } = require('@utils/generate-id'); 

class Documentation {
    constructor(author, text, dateAdded, refId) {
        this.refId = refId || generateRandomId()
        this.author = author || '';
        this.dateAdded = dateAdded || new Date().toISOString();
        this.text = text || ''
    }

    
    toObject() {
        return {
            refId: this.refId,
            author: this.author,
            dateAdded: this.dateAdded,
            text: this.text
        };
    }

    toJSON() {
        return {
            refId: this.refId,
            author: this.author,
            dateAdded: this.dateAdded,
            text: this.text
        };
    }
}


module.exports = Documentation