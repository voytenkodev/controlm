module.exports = async (req, res) => {
    if(req.session.userId){
        return res.render('newleague');
    }
    res.redirect('/auth/login')
}