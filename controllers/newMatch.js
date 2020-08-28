const Contact = require('../models/Contact.js')
const Stadium = require('../models/Stadium.js')
module.exports = async (req, res) => {
    if(req.session.userId){
        const contacts = await Contact.find({});
        const stadiums = await Stadium.find({});
        return res.render('create',{
            contacts, stadiums
        });
    }
    res.redirect('/auth/login')
}
