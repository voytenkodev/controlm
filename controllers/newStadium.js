const Contact = require('../models/Contact.js')

module.exports = async (req, res) => {
    if(req.session.userId){
        const contacts = await Contact.find({});
        return res.render('newstadium', {
            contacts
        });
    }
    res.redirect('/auth/login')
}