// import json-server in es5 version of js we use require whereas in es6 version we use import
const jsonServer = require('json-server')

// create json server using json-server library's create method
const mediaPlayerServer = jsonServer.create()

// set up path / route for db.json file 
const router = jsonServer.router("db.json")

// returns middlewares used by json server
const middleware = jsonServer.defaults()

// set up port number for server application 
// process.env.PORT - for dynamically selecting port number after deploying if 4000 port no is not available
const port = 4000 || process.env.PORT  

// use middleware and router in server
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

// server should listen for request from frontend
mediaPlayerServer.listen(port,()=>{
    console.log(`Media Player server started at port: ${port}, and waiting for client request !!!`);
})

// for running the json server we use node filename or since there is package.json file we can use npm start 