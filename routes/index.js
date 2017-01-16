const api = require('./api');
const pages = require('./pages');

modules.exports = (app)=> {
    app.use('/api', api);
    app.use('/', pages);
}