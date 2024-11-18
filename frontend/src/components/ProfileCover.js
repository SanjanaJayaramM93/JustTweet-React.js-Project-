import React, { Component } from 'react';

class ProfileCover extends Component {
  render() {
    return (
      <div className="profile-cover" style={{ width: '100vw', height: '25vh' }}>
        <img src={process.env.PUBLIC_URL + '/images/cover.jpg'} alt="Profile Cover" style={{ width: '100%', height: '100%' }} />
      </div>
    );
  }
}

export default ProfileCover;
