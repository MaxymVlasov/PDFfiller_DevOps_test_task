'use strict'

const http = require('http')
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello Apache!\n')
}).listen(8000, '0.0.0.0')
