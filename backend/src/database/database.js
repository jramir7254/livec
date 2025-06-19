const fs = require('fs');
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');

const file = path.join(__dirname, 'db.json');
const adapter = new JSONFile(file);
const defaultData = { users: [] };
const db = new Low(adapter, defaultData);

// Immediately read and set defaults
(async () => {
    const existed = fs.existsSync(file);
    await db.read();
    db.data;
    if (!existed) {
        await db.write();
    }
})();

module.exports = db;

