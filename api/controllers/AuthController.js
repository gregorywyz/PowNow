/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require('bcrypt');

module.exports = {

  // POST
  login: function(req,res){
    User.findOne({email:req.body.email}).then(function(user){
      if (user) {
        bcrypt.compare(req.body.password, user.password, function(err,result){
          if (err) return res.send({result:false,error:err});
          if (result) {
            req.session.user = user;
            res.send({
              result: true,
              user: user
            })
          } else {
            res.send({
              result: false,
              error: 'That password id invalid, please sign up'
            })
          }
        });
      } else {
        res.send({
          result: false,
          error: 'Sorry we don\'t have any records of you.'
        })
      }
    })
  },

  // GET
  check: function(req,res){
    res.send({user:req.session.user || false});
  },

  // DELETE
  logout: function(req,res){
    delete req.session.user;
    res.send({result:true});
  }

};

