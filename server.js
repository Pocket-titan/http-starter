// simple barebones webserver
const express = require('express')
const app = express()
const port = 8080
const path = __dirname + '/public'

// tell the app to expose path (our public folder)
app.use(express.static(path))

// any requests to localhost:port/ should get the file index.html
app.get('/', function(request, response) {
    res.sendFile(path + '/index.html')
})

// let the server listen on our defined port, and log an error if there is one
app.listen(port, function(error) {
  if (error) {
    console.log('Something bad happened', error)
    return error
  }
  console.log('Server is listening on port ' + port +
    ', visit localhost:' + port + ' in your browser :D')
  console.log('Pres CTRL+C to quit the server')
})
