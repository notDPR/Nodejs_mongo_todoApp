// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017' , (err,client)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to mongoDB server\n') ;

  var db = client.db('TodoApp');

  db.collection('Todos').find({
    _id : new ObjectID('5af4909f8b7028346419dbaa')
  }).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
   },
   (error)=>{
    console.log('Unable to fetch docs',error);
  });
  // .find() - pointer/cursor to documents
  // .toArray() - returns array of documents,  returns promise

  db.collection('Todos').find().count().then((count)=>{
    console.log('Todos count :' , count);
   },
   (error)=>{
    console.log('Unable to fetch docs',error);
  });

  db.collection('Users')
  .find({name : 'Ahsley'})
  .toArray()
  .then((docs)=>{
    console.log(JSON.stringify(docs,undefined,2));
  } , (err)=>{
    console.log('Unable to fetch docs',err);
  }) ;

  // client.close();
});
