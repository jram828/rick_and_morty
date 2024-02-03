const http = require('http');
const data =require('./utils/data');

http.createServer((req, res) => { 
    // const expression = /^http?:\/\/localhost:3001\/rickandmorty\/character\/(\d+)\*/i;
    // const url = new URL(req.url, `http://${req.headers.host}`);
    
  const findId = (url) => {
    // const expression = /^rickandmorty\/character\/(\d+)\*/;
    // const match = expression.test(url);
    const spliturl = url.split('/');
    return parseInt(spliturl[3])
    };
  
  if (req.url.includes("/rickandmorty/character/")) {
    const id = findId(req.url);
    const charactersFilter = data.filter(
          (character) => character.id == id
    );
    
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.writeHead(200, { "Content-type": "appllication/json" });
    res.end(JSON.stringify(charactersFilter));
  }
}).listen(3001, 'localhost');