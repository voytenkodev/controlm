const MatchPost = require('../models/MatchPost.js')

module.exports = async(req, res) => {
    const matchposts = await MatchPost.find({}).populate('date');
    var date = new Date()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var currentdate = month + '.' + day
    console.log(currentdate)
    res.render('matches',{
        matchposts, currentdate
    });
}