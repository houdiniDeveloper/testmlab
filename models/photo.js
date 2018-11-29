const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  image:{
    type: String,
    required: true
  }
});

mongoose.model('photos', PhotoSchema);