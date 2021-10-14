const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: '../../public/data/uploads/' });
const MyFiles = require('../../models/Files.js');

router.post('/', upload.single('uploaded_file'), function (req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any
  console.log(req.file);

  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  });
});

module.exports = router;
