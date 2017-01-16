const api = require('./api');
const pages = require('./pages');

module.exports = (app)=> {
    app.use('/api', api);
    app.use('/', pages);
}