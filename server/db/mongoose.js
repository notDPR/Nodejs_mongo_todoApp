var mongoose = require('mongoose');

mongoose.Promise = global.Promise ; // telling mongoose to use promises
mongoose.connect(process.env.DATABASE_URL ||'mongodb://localhost:27017/TodoApp') ;

module.exports = { mongoose};

// process.env.DATABASE_URL - is the url of mongodb hosted at mlab
// it is defined in heroku environment
