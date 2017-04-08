/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res) {
      res.view();
  },

  signup: function(req, res) {
    res.view();
  },

  create: function(req, res) {
      User.create({
        firstName: req.param('firstName'),
        lastName: req.param('lastName'),
        email: req.param('email'),
        password: req.param('password')
      }).exec(function (err, user) {
        if (err) { return res.serverError(err); }

        return res.redirect('/login');
      });
  }

};
