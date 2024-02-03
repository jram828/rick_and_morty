import http from 'http';
import data from './utils/data';

http.createServer( (req, res)=> { 
  if (req.url.includes("/rickandmorty/character")) {

// const expression = /^https?:\/\/some-domain\.com\/items\/(\d+)\/.*/i;

// const findId = (url) => {
//   const match = expression.exec(url);
//   if (match) {
//     return match[1];
//   }
//   return null;
// };

 