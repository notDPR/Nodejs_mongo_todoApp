var mongoose = require('mongoose');

var User = mongoose.model('user' , {
  email : {
    type : String ,
    required : true ,
    trim : true ,
    minlength : 1
  }
}) ;

// var newUser = new User({
//   email : '    '
// });
// newUser.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2) );
// },(err)=>{
//   console.log('Unable to save',err);
// });

module.exports = {User} ;
