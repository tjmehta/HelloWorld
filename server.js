var http = require('http');
if (!process.env.PORT) {
  throw new Error('process.env.PORT is required!');
}
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(process.env.PORT);
console.log('Server running at http://127.0.0.1:'+process.env.PORT+'/');
