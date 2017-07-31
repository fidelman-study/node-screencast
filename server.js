// 127.0.0.1/echo?message=Hello -> Hello
const http = require('http');
const url = require('url');

const server = new http.Server();

server.listen(1337, '127.0.0.1');

server.on('request', (req, res) => {
  const urlParsed = url.parse(req.url, true);

  if (urlParsed.pathname === '/echo' && urlParsed.query.message) {
    res.end(urlParsed.query.message);
  } else {
    res.statusCode = 404;
    res.end('Page not found');
  }
});