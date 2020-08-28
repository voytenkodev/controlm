"use strict";

var Contact = require('../models/Contact.js');

var Stadium = require('../models/Stadium.js');

module.exports = function _callee(req, res) {
  var contacts, stadiums;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!req.session.userId) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(Contact.find({}));

        case 3:
          contacts = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(Stadium.find({}));

        case 6:
          stadiums = _context.sent;
          return _context.abrupt("return", res.render('create', {
            contacts: contacts,
            stadiums: stadiums
          }));

        case 8:
          res.redirect('/auth/login');

        case 9:
        case "end":
          return _context.stop();
      }
    }
  });
};