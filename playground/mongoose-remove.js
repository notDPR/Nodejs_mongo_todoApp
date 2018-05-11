const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove({_id : '5af5fa5f6fc919327c048b78'})
Todo.findByIdAndRemove('5af5fa5f6fc919327c048b78')
.then((result)=>{
  console.log(result);
});
