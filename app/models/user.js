var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  hasTimeStamps: false,

  initialize: function(){
    this.on('creating', function(model, attrs, options){
      var salt = bcrypt.genSaltSync(10);
      var hash =bcrypt.hashSync(model.get('password'), salt);
      model.set('password', hash);

      // bcrypt.genSalt(10, function(err, salt){
      //   if (err) {
      //     console.log('error 1');
      //   }
      //   bcrypt.hash(model.get('password'), salt, function(){},function(err, hash){
      //     if (err) {
      //       console.log('error2');
      //     }
      //     console.log('hash', hash)
      //     model.set('password', hash)
      //     // db.knex('users').where('username', '=', model.get('username')).update({password: hash});
      //     // db.knex('users').insert({username: model.get('username'), password: hash});
      //   })
      // })
    })
    this.on('created', function(model, attrs, options) {
      
    })
  }

});

module.exports = User;