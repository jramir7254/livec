const path = require('path');
const moduleAlias = require('module-alias');

moduleAlias.addAliases({
    '@root': __dirname,
    '@utils': path.join(__dirname, 'src/utils'),
    '@models': path.join(__dirname, 'src/models'),
    '@controllers': path.join(__dirname, 'src/controllers'),
    '@routes': path.join(__dirname, 'src/routes'),
    '@database': path.join(__dirname, 'src/database'),
});


const app = require('./src/app');
const PORT = 3000


app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`)
});




