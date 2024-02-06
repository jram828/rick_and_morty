const http = require('http');
const data =require('./utils/data');

http.createServer((req, res) => { 
    
  res.setHeader("Access-Control-Allow-Origin", "*");

  const findId = (url) => {
    const spliturl = url.split('/');
    return parseInt(spliturl[3])
    };
  
  if (req.url.includes("/rickandmorty/character/")) {
    const id = findId(req.url);
    const charactersFilter = data.filter(
          (character) => character.id === id
    );
    res.writeHead(200, { "Content-type": "application/json" });
    return res.end(JSON.stringify(charactersFilter));
  } else {
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('Character Id not found');
  }
}).listen(3001, 'localhost');