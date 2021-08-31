var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer  = require('multer')
// files uploaded to (uploads) folder
const upload = multer({ dest: 'uploads/' })


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post("/api/fileanalyse",upload.single('upfile'),(req,res) => {
    // req.file is the file object 
    // extract obj
  const {originalname, mimetype, size} = req.file
  return res.json({name:originalname, type:mimetype , size})
})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
