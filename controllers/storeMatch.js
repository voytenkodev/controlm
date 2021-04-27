const SMTPClient = require('emailjs');

const MatchPost = require("../models/MatchPost");

module.exports = async (req, res) => {
  await MatchPost.create({
    ...req.body,
    userid: req.session.userId,
  });
  alert('add match')
  const client = new SMTPClient({
    user: "voytenkodev",
    password: "ccpvkzpmbhzzoaac",
    host: "smtp.yandex.ru",
    ssl: true,
  },
  (err, message) => {
      alert(err || message)
  });
  alert('OK')
  client.send(
    {
      text: "Add match",
      from: "voytenkodev@yandex.ru",
      to: "voytenkodev@gmail.com",
      subject: "test",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
  res.redirect("/matches");
};
