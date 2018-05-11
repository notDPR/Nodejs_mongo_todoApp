const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017' , (err,client)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to mongoDB server\n') ;

  var db = client.db('TodoApp');

//findOneAndUpdate
//   db.collection('Todos').findOneAndUpdate({text:'eat shit'} ,
//     {
//       $set : {text : 'i am good'}
//     },
//     {returnOriginal : false}
//   )
//   .then((result)=>{console.log(result);},
//   (err)=>{console.log(err);}
// );

//findOneAndUpdate
  db.collection('Users').findOneAndUpdate({name:'Ballu'} ,
    {
      $set : {name : 'Balram'},
      $inc : { age : 1 }
    },
    {returnOriginal : false}
  )
  .then((result)=>{console.log(result);},
  (err)=>{console.log(err);}
);










});
