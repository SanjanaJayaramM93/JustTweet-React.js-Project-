import React from 'react';

const IndividualTweetCard = ({ tweet, onDelete }) => {
  const handleDelete = () => {
    onDelete(tweet._id);
  };

  return (
    <div className="tweet-card">
      <div className="tweet-card-header">
        <span className="tweet-card-name">{tweet.name}</span>
        <br />
        <span className="tweet-card-username">{tweet.username}</span>
        <br />
        <span className="tweet-card-date">{tweet.date}</span>
      </div>
      <div className="tweet-card-content">{tweet.tweetDesc}</div>
      
      <button className="tweet-card-delete" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default IndividualTweetCard;




