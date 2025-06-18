const express = require('express');
const path = require('path');
const moduleAlias = require('module-alias');

const app = express();
const port = 3000;

app.use(express.json());

// Module aliases
moduleAlias.addAliases({
    '@root': __dirname,
    '@utils': path.join(__dirname, 'src/utils'),
    '@models': path.join(__dirname, 'src/models'),
    '@controllers': path.join(__dirname, 'src/controllers'),
    '@routes': path.join(__dirname, 'src/routes'),
    '@database': path.join(__dirname, 'src/database'),
});

const { db, init } = require('@database/database');

// Default route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

// Initialize DB and start server
init().then(() => {
    app.get('/users', async (req, res) => {
        await db.read();
        res.json(db.data.users);
    });

    app.post('/users', async (req, res) => {
        const user = req.body;
        db.data.users.push(user);
        await db.write();
        res.status(201).json(user);
    });

    // ✅ Start the server once everything is ready
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
});
