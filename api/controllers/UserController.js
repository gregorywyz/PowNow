/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  signup: function(req,res) {
    User.create({name:req.body.name,email:req.body.email,password:req.body.password}).then(function(user){
      if (user) {
        console.log("user signup",user)
        req.session.user = user;
        res.send({result: true,user: user});
      } else {
        return res.send({result:false,error:"could not create user"});
      }

    })
  }

};

