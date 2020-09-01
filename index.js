const mongoose = require('mongoose')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const ejs = require('ejs')
const MatchPost = require('./models/MatchPost')
const fileUpload = require('express-fileupload')
const validateMiddleWare = require('./middleware/validationMiddleware')
const newMatchController = require('./controllers/newMatch')
const homeController = require('./controllers/home')
const getMatchController = require('./controllers/getMatch')
const storeMatchController = require('./controllers/storeMatch')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware')
const redirectifAuthenticatedMiddleware = require('./middleware/redirectifAuthenticatedMiddleware')
const logoutController = require('./controllers/logout')
const flash = require('connect-flash');
const newContact = require('./controllers/newContact')
const contactStore = require('./controllers/storeContacts')
const contacts = require('./controllers/contacts')
const getContactController = require('./controllers/getContact')
const newStadium = require('./controllers/newStadium')
const stadiumStore = require('./controllers/storeStadiums')
const stadiums = require('./controllers/stadiums')
const getStadiumController = require('./controllers/getStadium')
const app = new express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
mongoose.connect('mongodb+srv://voytenkodev:hayden317amidalarampage@cluster0.6ecyt.mongodb.net/signaltv_db', {useNewUrlParser: true});
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(fileUpload())
app.use('/matches/store',validateMiddleWare)
app.use(expressSession({
    secret: 'keyboard cat',
  }))

global.loggedIn = null;

app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});
app.use(flash());

app.listen(4000,() => {
    console.log('App listening on port 4000')
})
app.get('/matches', homeController)
app.get('/',(req, res) => {
    res.render('index');
})
app.get('/pagenotfound',(req, res) => {
    res.render('pagenoutfound');
})
app.get('/match/new', authMiddleware,newMatchController,)
app.get('/match/:id', getMatchController)
app.post('/matches/store', authMiddleware, storeMatchController)
/*
app.get('/auth/register', redirectifAuthenticatedMiddleware, newUserController)
*/
app.post('/users/register',  redirectifAuthenticatedMiddleware, storeUserController)
app.get('/auth/login',  redirectifAuthenticatedMiddleware, loginController)
app.post('/users/login',  redirectifAuthenticatedMiddleware, loginUserController)
app.get('/auth/logout', logoutController)

app.get('/contacts/new', newContact)
app.post('/contact/register', contactStore)
app.get('/contacts', contacts)
app.get('/contact/:id', getContactController)

app.get('/stadiums/new', newStadium)
app.post('/stadiums/register', stadiumStore)
app.get('/stadiums', stadiums)
app.get('/stadium/:id', getStadiumController)

app.use((req, res) => res.render('notfound'))