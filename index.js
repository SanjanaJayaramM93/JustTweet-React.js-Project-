const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Tweet = require('./tweet');

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect('mongodb+srv://test:test@justtweet.zqwxams.mongodb.net/TWEETS', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB', err));

// GET route to fetch all tweets
app.get('/tweets', (req, res) => {
  Tweet.find()
    .then((tweets) => {
      console.log('Retrieved tweets:', tweets);
      res.json(tweets);
    })
    .catch((err) => {
      console.error('Error fetching tweets:', err);
      res.sendStatus(500);
    });
});

// POST route to create a new tweet
app.post('/tweets', (req, res) => {
  const newTweet = new Tweet(req.body);
  newTweet
    .save()
    .then((tweet) => {
      console.log('New tweet created:', tweet);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('Error creating tweet:', err);
      res.sendStatus(500);
    });
});

// DELETE route to delete a tweet
app.delete('/tweets/:id', async (req, res) => {
  const tweetId = req.params.id;

  // Validate the tweet ID
  if (!mongoose.Types.ObjectId.isValid(tweetId)) {
    return res.status(400).json({ error: 'Invalid tweet ID' });
  }

  try {
    await Tweet.deleteOne({ _id: tweetId }).exec();
    console.log('Tweet deleted successfully');
    res.sendStatus(200);
  } catch (error) {
    console.error('Error deleting tweet:', error);
    res.sendStatus(500);
  }
});

// Other routes and handlers...

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3001');
});
