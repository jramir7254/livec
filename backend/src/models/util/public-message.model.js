const { generateRandomId } = require('@utils/generate-id'); 

class PublicMessage {
    constructor({refId = generateRandomId(), status, date = new Date().toISOString(), message, author}) {
        this.refId = refId;
        this.status = status;
        this.date = date;
        this.message = message;
        this.author = author;
    }

    toObject() {
        return {
            refId: this.refId,
            status: this.status,
            author: this.author,
            date: this.date,
            message: this.message
        };
    }
}

module.exports = PublicMessage