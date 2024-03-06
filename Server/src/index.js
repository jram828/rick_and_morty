const express = require('express');
const server = require('./App');
const PORT = 3001;
const router= require('../src/routes')
//const {sequelize}=require('./DB_connection')
server.use("/rickandmorty", router);
const { conn } = require("./DB_connection"); 

conn.sync({ force:false}).then(() => {
  server.listen(PORT, () => {
    console.log('Server en puerto: ' + PORT);
  
  });
});


//CON WEB SERVER

// const http = require('http');
// const getCharById = require("./controllers/getCharById");

// http.createServer((req, res) => { 
    
//   res.setHeader("Access-Control-Allow-Origin", "*");

//   const findId = (url) => {
//     const spliturl = url.split('/');
//     return parseInt(spliturl[3])
//     };
  
//   if (req.url.includes("/rickandmorty/character/")) {
//     const id = findId(req.url);
//     getCharById(res,id)
    
//   } else {
//     res.writeHead(404,{'Content-Type':'text/plain'});
//     res.end('Character Id not found');
//   }
// }).listen(3001, 'localhost');