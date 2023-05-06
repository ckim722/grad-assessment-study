//define and export a model for a message

  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;

  const messageSchema = new Schema({
    message: {
        type: String,
        required: true,
        unique: false}
  });

  module.exports = mongoose.model('Message', messageSchema);