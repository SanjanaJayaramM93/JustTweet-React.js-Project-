import React from 'react';
import IndividualTweetCard from './IndividualTweetCard';

const TweetCard = ({ tweets, onDelete }) => {
  const handleDelete = (tweetId) => {
    onDelete(tweetId);
  };

  return (
    <div className="tweet-card">
      {tweets.map((tweet) => (
        <IndividualTweetCard
          key={tweet.id}
          tweet={tweet}
          onDelete={handleDelete} // Pass the handleDelete function directly
        />
      ))}
    </div>
  );
};

export default TweetCard;









