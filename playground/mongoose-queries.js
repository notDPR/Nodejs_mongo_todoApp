const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5af54d64c19c552bfcf82c5d' ;
// var id = '6af54d64c19c552bfcf82c5dsadsad' ;   // madeup id


// if(!ObjectID.isValid(id)){
//   console.log('ID not valid') ;
// }

// below functions will throw error if ID is invalid
Todo.find({
  _id : id
  //mongoose is autmatically going to convert this string into object ID
}).then((todos)=>{
  if(todos.length==0) return console.log('ID not found') ;
  console.log('Todos',todos);
}) ;

Todo.findOne({
  _id : id
}).then((todo)=>{
  if(!todo) return console.log('ID not found') ;
  console.log('Todo',todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo) return console.log('ID not found') ;
  console.log('Todo by Id',todo);
}).catch((err)=>console.log(err));

var id_user = '5af4c43b86319f0c984f47e9';
User.findById(id_user).then((user)=>{
  if(!user) return console.log('Id not found');

  if(user.email) console.log('User found',user);
  else console.log('user has no email');
})
.catch((err)=>console.log(err));



// structure -
// is ID valid
//   if not send 404
//   else
//     findById
//       success
//         if found send that todo
//         else not found send 404
//       error
//         send error with status 400
