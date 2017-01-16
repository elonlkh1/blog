const express = require('express');
const path = require('path');
const config = require('./config/default');
const redisConfig = require('./config/redis')();

const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const flash = require('connect-flash');

const app = express();


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('[:date[clf]] [:status] :method :url ~:response-time(ms) -:res[content-length]- @:remote-addr #:user-agent'));
app.use(session({
    secret: 'blog',
    key: 'blog',
    maxAge: 2592000000,
    resave: true,
    saveUninitialized: true,
    store: new RedisStore({
        host: redisConfig.host,
        port: redisConfig.port,
        pass: redisConfig.opts.password
    }),
}));

app.use(require('express-formidable')({
    uploadDir: path.join(__dirname, 'public/img'),// 上传文件目录
    keepExtensions: true// 保留后缀
}));

app.use(flash());
routes(app);
app.locals.blog = {
    title: 'name',
    description: 'name'
}
app.use(function (req, res, next) {
    res.locals.user = req.session.user;
    req.locals.success = req.flash('success').toString();
    res.locals.error = req.flash('error').toString();
    next();
});


app.use(function (req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.send({message: err.message, error: err});
    });
}

module.exports = app;
