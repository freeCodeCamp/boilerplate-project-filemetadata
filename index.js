var express = require('express');
var cors = require('cors');
require('dotenv').config()
//call multer and set storage destination
const multer = require('multer');
const upload = multer({dest: 'uploads/'})

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//create upload endpoint, and process single file using uplaod.sinlge() then passin the Name attr. 
app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  res.status(200).json({file: req.file})
})

app.get('/api/fileanalyes', (req, res) => {
  res.send('hello again!')
})

app.get('/api/sayBye', (req, res) => {
  res.send('say bye')
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
