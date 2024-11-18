import React from 'react';

const ProfileStats = ({ tweetCount, following, followers, likes }) => {
  

  return (
    <div className="profile-stat d-flex justify-content-center align-items-center">
      <div className="text-center mx-2">
       <div>Tweets</div>
        <div>{tweetCount}</div>
        
      </div>
      <div className="text-center mx-2">
        <div>Following</div>
        <div>{following}</div>
      </div>
      <div className="text-center mx-2">
        <div>Followers</div>
        <div>{followers}</div>
      </div>
      <div className="text-center mx-2">
        <div>Likes</div>
        <div>{likes}</div>
      </div>
    </div>
  );
}

export default ProfileStats;





