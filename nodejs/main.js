'use strict'

const http = require('http')
const url = require('url')
const fs = require('fs')

const routes = {
  '': 'index.html',
  index: 'index.html',
  kill: 'kill.html',
  status: 'status.html'
}

function givePage (req, res, route) {
  fs.readFile(`${__dirname}/html/${route}`, (err, data) => {
    if (err) throw err
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data, 'utf8')
    res.end()
  })
}

http.createServer((req, res) => {
  // parse the pathname as a url, get the trimmed route from the request
  const path = url.parse(req.url).pathname

  const basePath = path.split('/')[1]
  if (routes.hasOwnProperty(basePath)) {
    givePage(req, res, routes[basePath])
  } else {
    givePage(req, res, routes[''])
  }
}).listen(process.env.PORT || 8000, '0.0.0.0')
