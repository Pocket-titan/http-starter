// simple barebones webserver
const express = require('express')
const app = express()
const port = 8080
const path = __dirname + '/public'

app.use(express.static(path))
app.get('/', function(request, response) {
    res.sendFile(path + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.log('Something bad happened', error)
    return error
  }
  console.log('Server is listening on port ' + port +
    ', visit localhost:' + port + ' in your browser :D')
  console.log('Pres CTRL+C to quit the server')
})
