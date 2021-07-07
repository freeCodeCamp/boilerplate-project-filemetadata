var multer = require('multer')
var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', multer().single('upfile'),(req, res) => {
  console.log(req.file)
  res.json({ name: req.file.originalname, size: req.file.size, type: req.file.mimetype })
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
