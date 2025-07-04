const path = require('path');
const moduleAlias = require('module-alias');
const morgan = require('morgan');


moduleAlias.addAliases({
    '@root': __dirname,
    '@utils': path.join(__dirname, 'src/utils'),
    '@models': path.join(__dirname, 'src/models'),
    '@controllers': path.join(__dirname, 'src/controllers'),
    '@routes': path.join(__dirname, 'src/routes'),
    '@database': path.join(__dirname, 'src/database'),
    '@logger': path.join(__dirname, 'logger/logger.js'),
    '@constants': path.join(__dirname, 'src/constants'),
    '@service': path.join(__dirname, 'src/service'),
    '@errors': path.join(__dirname, 'src/errors')
});


const logger = require('@logger').addSource({
    file: "server.js",
    method: "listen",
});


const app = require('./src/app');
const PORT = 3000


app.listen(PORT, () => {
    logger.info(`app.started`, { PORT })
});


app.use(
    morgan('combined', {
        stream: {
            write: msg => logger.debug(msg.trim())
        }
    })
);




