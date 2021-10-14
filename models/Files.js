const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema(
  {
    name: String, // String is shorthand for {type: String}
    type: String,
    size: Number,
  },
  { collection: 'files' }
);

module.exports = MyFiles = mongoose.model('files', schema);
