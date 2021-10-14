const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const { urlencoded } = require('body-parser');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URI).then(console.log('connected'));
const fileanalyse = require('./routes/api/files.js');

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/api/fileanalyse', fileanalyse);

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port);
});
