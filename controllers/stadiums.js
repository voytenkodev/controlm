const Stadium = require('../models/Stadium.js')
const StadiumContact = require('../models/Contact.js')

module.exports = async (req, res) => {
    const stadiums = await Stadium.find({});

    res.render('stadiums',{
        stadiums
    });
}