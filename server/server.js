var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo') ;
var {User} = require('./models/user') ;

var app = express();
const port = process.env.PORT || 3000 ;

//middleware
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  // console.log(req.body) ;
  var todo = new Todo({
    text : req.body.text ,
    completed : req.body.completed
  });
  todo.save().then((doc)=>{
    // console.log('New Doc saved' , doc) ;
    res.send(doc);
  },(err)=>{
    // console.log('doc not saved',err);
    res.status(400).send(err) ;
  }) ;
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});//creating array inside object for ease or error handling
  }, (e) => {
    res.status(400).send(e);
  })
});

// req.params gets you variables in the URl like here 'id'
app.get('/todos/:id',(req,res)=>{
  // ID validation
  var id = req.params.id ;
  if(!ObjectID.isValid(id)) return res.status(404).send();

  // find that ID in db
  Todo.findById(id).then((todo)=>{
    // todo not found
    if(!todo) return res.status(404).send();
    // todo found
    res.send({todo});
  })
  .catch((err)=>{
    console.log(err) ;
    res.status(400).send();
  });
});





// --------------------------------------------------------------- //

app.listen(port,()=>{
  console.log('App is live on',port);
});


module.exports = {app} ;
