const Contact = require('../models/Contact.js')
const Stadium = require('../models/Stadium.js')
const League = require('../models/League')

module.exports = async (req, res) => {
    if(req.session.userId){
        const contacts = await Contact.find({});
        const stadiums = await Stadium.find({});
        const leagues = await League.find({});

        return res.render('create',{
            contacts, stadiums, leagues
        });
    }
    res.redirect('/auth/login')
}
