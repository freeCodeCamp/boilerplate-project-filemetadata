var express = require('express');
var cors = require('cors');
require('dotenv').config()
const mime = require('mime-types');
const multer = require('multer');
const path = require("path");

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()} - ${file.originalname}` )
	}
})

const uploadStorage = multer({storage: storage})

app.post("/api/fileanalyse", uploadStorage.single("upfile"), (req, res) => {
	const file = req.file;

	res.send({
		name: file.originalname,
		type: file.mimetype,
		size: file.size
	})
})



const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
