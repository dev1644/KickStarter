const { createServer } = require('http');
const next = require('next');

const app = next({
    dev: process.env.NODE_ENV !== 'production'
 });// It tells to look at the Global Enviroment variable NODE_ENV and  
 //and look to see if it is set to string production. If yes then it assumes
 //that our app is in Production mode

 const routes = require('./routes.js');
const handler = routes.getRequestHandler(app); 

 app.prepare().then(()=> {
     createServer(handler).listen(3000, (err) =>{
         if(err) throw err;
         console.log('Ready on LocalHost:3000');
     }); 
 });