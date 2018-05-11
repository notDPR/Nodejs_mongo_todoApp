var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
text : {
  type : String ,
  required : true ,
  minlength : 1 ,
  trim : true       // removes leading or trailing whitespaces
},
completed : {
  type : Boolean ,
  default : false ,

},
completedAt : {
  type : Number ,
  default : null
}
});

// var newTodo = new Todo({
//   text : true
// });
// newTodo.save().then((doc)=>{
//   console.log('Saved Todo:',doc);
// },(err)=>{
//   console.log('Unable to save',err);
// });

// var otherTodo = new Todo({
//   text : 'Feed the cat',
//   completed : true ,
//   completedAt : 123
// });
// otherTodo.save()
// .then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2) );
// },(err)=>{
//   console.log('Unable to save',err);
// });


module.exports = {Todo} ;
