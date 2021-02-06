var express = require("express");
var cors = require("cors");
var formidable = require("formidable");
var bodyParser = require("body-parser");
require("dotenv").config();

var app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", (req, res) => {
  var form = new formidable.IncomingForm();

  form.parse(req);

  form.on("fileBegin", function (name, file) {
    file.path = __dirname + "/uploads" + file.name;
  });

  form.on("file", function (name, file) {
    const nameRes = file.name;
    const typeRes = file.type;
    const sizeRes = file.size;
    res.json({ name: nameRes, type: typeRes, size: sizeRes });
  });
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
