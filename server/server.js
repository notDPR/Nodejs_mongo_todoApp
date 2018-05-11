var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo') ;
var {User} = require('./models/user') ;

var app = express();

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

// ----------------------------------------------------- //

app.listen(3000,()=>{
  console.log('Started on port 3000');
});


module.exports = {app} ;