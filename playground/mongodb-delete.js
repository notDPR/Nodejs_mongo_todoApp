const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017' , (err,client)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to mongoDB server\n') ;

  var db = client.db('TodoApp');

// deleteMany
  // db.collection('Todos').deleteMany({text:'eat shit'})
  // .then((result)=>{
  //   console.log(result);
  // },
  // (error)=>{
  //   console.log('Unable to deleteMany');
  // });

// deleteOne
// db.collection('Todos').deleteOne({text:'eat shit'})
// .then((result)=>{
//   console.log(result);
// },
// (error)=>{
//   console.log('Unable to deleteMany');
// });

// findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: true})
// .then((result)=>{
//   console.log(result);
// },
// (error)=>{
//   console.log('Unable to deleteMany');
// });









});
