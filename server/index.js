const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const { url, method } = req
  console.log(req)
  if (url == '/') {
    const homePage = fs.readFileSync('./index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(homePage);
  } else if (url === '/about') {
    if (method == 'GET') {
      const aboutPage = fs.readFileSync('./about.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(aboutPage);
    } else if (method == 'POST') {
      res.end('Estoy haciendo un POST');
    }
  } else {
    res.end('Not found');
  }
});

server.listen(8080);