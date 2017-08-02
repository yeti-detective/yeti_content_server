const express = require('express')
var app = express()

const path = require('path')

var port = process.env.PORT || 8888

app.get('/', (req, res)=> {
  res.send('you\'ve got to request a file, dummy')
})

app.get('/:file', (req, res)=> {
  res.sendFile(path.join(__dirname + '/' + req.params.file))
})

app.listen(port, ()=>{
  console.log('listening on ' + port)
})
