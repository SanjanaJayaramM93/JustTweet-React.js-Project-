const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
  name: String,
  username: String,
  date: String,
  tweetDesc: String,
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;


