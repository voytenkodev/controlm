const { SMTPClient } = require('emailjs');

const MatchPost = require("../models/MatchPost");

module.exports = async (req, res) => {
  await MatchPost.create({
    ...req.body,
    userid: req.session.userId,
  });
  const client = new SMTPClient({
    user: "rugby@signal-tv.com",
    password: "msjnplqzotnfgwss",
    host: "smtp.yandex.ru",
    ssl: true,
  });

  client.send(
    {
      text: `Добавили новый матч. Город: ${req.body.city}, Дата: ${req.body.date}. Подробности: http://95.165.12.181/matches`,
      from: "rugby@signal-tv.com",
      to: "rugby@a4-agency.ru",
      subject: "Новый матч",
    },
    (err, message) => {
      console.log(err || message);
    }
  );
  res.redirect("/matches");
};
