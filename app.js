var http = require('http');
const express = require('express');
const nodemon = require('nodemon');
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname});
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})