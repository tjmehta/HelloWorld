var http = require('http');
if (!process.env.PORT) {
  throw new Error('process.env.PORT is required!');
}
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
}).listen(process.env.PORT);
console.log('Server running at http://127.0.0.1:'+process.env.PORT+'/');

process.on('SIGINT', console.log.bind(console, 'SIGINT'));
process.on('SIGINT', console.log.bind(console, 'SIGINT'));
process.on('SIGINT', console.log.bind(console, 'SIGINT'));
process.on('SIGINT', console.log.bind(console, 'SIGINT'));
process.on('SIGINT', console.log.bind(console, 'SIGINT'));
process.on('SIGTERM', console.log.bind(console, 'SIGTERM'));
process.on('SIGTERM', console.log.bind(console, 'SIGTERM'));
process.on('SIGTERM', console.log.bind(console, 'SIGTERM'));
process.on('SIGTERM', console.log.bind(console, 'SIGTERM'));
process.on('SIGTERM', console.log.bind(console, 'SIGTERM'));

if (process.env.ERROR_TIMEOUT) {
  setTimeout(function () {
    throw new Error('die');
  }, process.env.ERROR_TIMEOUT);
}