const Stadium = require('../models/Stadium.js')
const StadiumContact = require('../models/Contact.js')

module.exports = async(req, res) => {
    const stadium = await (await Stadium.findById(req.params.id));
    
    const stadiumcontact = await (await StadiumContact.aggregate([
        { $match: {name: stadium.contact}},
        { $project: {name: 1}}
    ]))[0]
    res.render('stadium', {
        stadium, stadiumcontact
    })
}