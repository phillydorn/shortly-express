var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimeStamps: false,

  initialize: function(){
    this.on('creating', function(model, attrs, options){
      bcrypt.genSalt(10, function(err, salt){
        if (err) {
          console.log('error 1');
        }
        bcrypt.hash(model.get('password'), salt, function(err, hash){
          if (err) {
            console.log('error2');
          }
          db.knex('users').insert({username: username}, {password: hash});
        })
      })
    })
  }
  
});

module.exports = User;