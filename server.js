'use strict';

const express = require('express');
const cors = require('cors');

// require and use "multer"...
const multer = require("multer");

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// API Endpoint
app.post('/api/fileanalyze', multer().single('upfile'), function(req, res) {
  let file = req.file;
  res.json({
    name: file.originalname,
    size: file.size
  })
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
