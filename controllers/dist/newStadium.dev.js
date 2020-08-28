"use strict";

var Contact = require('../models/Contact.js');

module.exports = function _callee(req, res) {
  var contacts;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!req.session.userId) {
            _context.next = 5;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(Contact.find({}));

        case 3:
          contacts = _context.sent;
          return _context.abrupt("return", res.render('newstadium', {
            contacts: contacts
          }));

        case 5:
          res.redirect('/auth/login');

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};