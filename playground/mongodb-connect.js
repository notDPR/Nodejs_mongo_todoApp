// const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

// var obj = new ObjectID(); // new objectId(works)
// console.log(obj);

// var user = {name : 'himanshu' , age : 22} ;
// var {name} = user ;


    // url where your database lives
    // TodoApp - name of database
MongoClient.connect('mongodb://localhost:27017' , (err,client)=>{
  if(err){
    return console.log('Unable to connect to mongoDB server');
  }
  console.log('Connected to mongoDB server') ;

  var db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text : 'Something to do',
  //   completed : false
  // },(err,result)=>{
  //   if(err) return console.log('Unable to insert todo',err);
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  db.collection('Users').insertOne({
    name : 'Ahsley' ,
    age : 21 ,
    location : 'New Delhi'
  },(err,result)=>{
    if(err) return console.log('Unable to insert todo',err);
    // console.log(JSON.stringify(result.ops[0],undefined,2));
    console.log( result.ops[0]._id.getTimestamp()) ;
  });

  client.close();
});
