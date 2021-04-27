const MatchPost = require("../models/MatchPost");

module.exports = async (req, res) => {
  await MatchPost.create({
    ...req.body,
    userid: req.session.userId,
  });
  res.redirect("/matches");
};
