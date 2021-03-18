"use strict";

var mongoose = require('mongoose');

var express = require('express');

var path = require('path');

var bodyParser = require('body-parser');

var ejs = require('ejs');

var MatchPost = require('./models/MatchPost');

var fileUpload = require('express-fileupload');

var validateMiddleWare = require('./middleware/validationMiddleware');

var newMatchController = require('./controllers/newMatch');

var homeController = require('./controllers/home');

var getMatchController = require('./controllers/getMatch');

var storeMatchController = require('./controllers/storeMatch');

var newUserController = require('./controllers/newUser');

var storeUserController = require('./controllers/storeUser');

var loginController = require('./controllers/login');

var loginUserController = require('./controllers/loginUser');

var expressSession = require('express-session');

var authMiddleware = require('./middleware/authMiddleware');

var redirectifAuthenticatedMiddleware = require('./middleware/redirectifAuthenticatedMiddleware');

var logoutController = require('./controllers/logout');

var flash = require('connect-flash');

var newContact = require('./controllers/newContact');

var contactStore = require('./controllers/storeContacts');

var contacts = require('./controllers/contacts');

var getContactController = require('./controllers/getContact');

var newStadium = require('./controllers/newStadium');

var stadiumStore = require('./controllers/storeStadiums');

var stadiums = require('./controllers/stadiums');

var getStadiumController = require('./controllers/getStadium');

var app = new express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
mongoose.connect('mongodb+srv://voytenkodev:hayden317amidalarampage@cluster0.6ecyt.mongodb.net/signaltv_db', {
  useNewUrlParser: true
});
app.set('view engine', 'ejs');
app.use(express["static"]('public'));
app.use(fileUpload());
app.use('/matches/store', validateMiddleWare);
app.use(expressSession({
  secret: 'keyboard cat'
}));
global.loggedIn = null;
app.use("*", function (req, res, next) {
  loggedIn = req.session.userId;
  next();
});
app.use(flash());
app.listen(4001, function () {
  console.log('App listening on port 4000');
});
app.get('/matches', homeController);
app.get('/', function (req, res) {
  res.render('index');
});
app.get('/pagenotfound', function (req, res) {
  res.render('pagenoutfound');
});
app.get('/match/new', authMiddleware, newMatchController);
app.get('/match/:id', getMatchController);
app.post('/matches/store', authMiddleware, storeMatchController);
/*
app.get('/auth/register', redirectifAuthenticatedMiddleware, newUserController)
*/

app.post('/users/register', redirectifAuthenticatedMiddleware, storeUserController);
app.get('/auth/login', redirectifAuthenticatedMiddleware, loginController);
app.post('/users/login', redirectifAuthenticatedMiddleware, loginUserController);
app.get('/auth/logout', logoutController);
app.get('/contacts/new', newContact);
app.post('/contact/register', contactStore);
app.get('/contacts', contacts);
app.get('/contact/:id', getContactController);
app.get('/stadiums/new', newStadium);
app.post('/stadiums/register', stadiumStore);
app.get('/stadiums', stadiums);
app.get('/stadium/:id', getStadiumController);
app.use(function (req, res) {
  return res.render('notfound');
});