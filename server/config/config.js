var env = process.env.NODE_ENV || 'development' ;
if(env==='development'){
  process.env.DATABASE_URL = 'mongodb://localhost:27017/TodoApp' ;
}
else if(env==='test'){
  process.env.DATABASE_URL = 'mongodb://localhost:27017/TodoAppTest' ;
}
console.log(`Your are in ${env} mode`);
