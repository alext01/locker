/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var passport = require('passport');

 module.exports = {

     login: function(req, res) {
         res.view();
     },
     process: function(req, res) {
         passport.authenticate('local', function(err, user, info) {
             if( (err)||(!user) ) {
                 return res.send({
                     message: 'login failed'
                 });
                 res.send(err);
             }
             req.logIn(user, function(err) {
                 if(err) res.send(err);
                 return res.redirect('/welcome');
             });
         }) (req, res);
     },

     logout: function(req, res) {
         req.logOut();
         res.redirect('/');
     }
 };
