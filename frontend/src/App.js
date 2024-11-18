import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import ProfileCover from './components/ProfileCover';
import ProfileStats from './components/ProfileStats';
import ProfileInfo from './components/ProfileInfo';
import NewTweet from './components/NewTweet';
import RightPanel from './components/RightPanel';
import friendData from './friendData';
import TweetCard from './components/TweetCard';

const App = () => {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    main();
  }, []);

  const main = async () => {
    try {
      await fetchTweets();
    } catch (error) {
      console.error('Error in main function:', error);
    }
  };

  const fetchTweets = async () => {
    setLoading(true);

    try {
      const response = await axios.get('http://localhost:3001/tweets');
      setTweets(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching tweets:', error);
      setLoading(false);
    }
  };

  const handleDelete = async (tweetID) => {
    console.log(tweetID);
    try {
      await axios.delete(`http://localhost:3001/tweets/${tweetID}`);
      await fetchTweets();
    } catch (error) {
      console.error('Error deleting tweet:', error);
    }
  };
  
  const handleNewTweet = async (newTweetText) => {
    console.log(newTweetText);
    const newTweet = {
      id: tweets.length + 1, // Make sure the id is correctly assigned
      name: 'John Smith',
      username: '@john',
      date: 'Nov 20',
      tweetDesc: newTweetText,
    };

    try {
      await axios.post('http://localhost:3001/tweets', newTweet);
      await fetchTweets();
    } catch (error) {
      console.error('Error creating tweet:', error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <ProfileCover />
      <ProfileStats
        tweetCount={tweets.length}
        following={50}
        followers={200}
        likes={300}
      />
      <div className="row">
        <div className="col">
          <ProfileInfo />
        </div>
        <div className="col-5">
          <NewTweet onNewTweet={handleNewTweet} />
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <TweetCard tweets={tweets} onDelete={handleDelete} />
          )}
        </div>
        <div className="col">
          <RightPanel friends={friendData} />
        </div>
      </div>
    </div>
  );
};

export default App;









