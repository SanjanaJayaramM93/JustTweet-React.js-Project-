import React, { Component } from 'react';

class ProfileInfo extends Component {
  render() {
    return (
      <div className="profile-info" style={{ flex: 1, marginLeft: 'auto', backgroundColor: '#E1E8ED', padding: '20px', position: 'relative' }}>
        <img className="profile-image" src="/images/profile1.jpg" alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', position: 'absolute', top: '-75px', left: 'calc(50% - 75px)' }} />
        <div className="profile-details" style={{ marginTop: '100px' }}>
          <h1>Jhon Smith</h1>
          <p>@jhon</p>
          <p style={{color: '#1DA1F2'}}>twitter.com/john</p>
          <p style={{color: '#1DA1F2'}}>Perth,WA</p>
    
          <p>Joined November 2020</p>
          <button className='twitter-button-profile'>Tweet to Jhon Smith</button>
          <p style={{color: '#1DA1F2'}}>1141 photos and videos</p>
          
          <div className="image-grid">
            <div className="grid-item">
              <img className="grid-image" src="/images/grid1.jpg" alt="Image 1" />
            </div>
            <div className="grid-item">
              <img className="grid-image" src="/images/grid2.jpg" alt="Image 2" />
            </div>
            <div className="grid-item">
              <img className="grid-image" src="/images/grid3.jpg" alt="Image 3" />
            </div>
            <div className="grid-item">
              <img className="grid-image" src="/images/grid4.jpg" alt="Image 4" />
            </div>
            <div className="grid-item">
              <img className="grid-image" src="/images/grid5.jpg" alt="Image 5" />
            </div>
            <div className="grid-item">
              <img className="grid-image" src="/images/grid6.jpg" alt="Image 6" />
            </div>
            <div className="grid-item">
              <img className="grid-image" src="/images/grid7.jpg" alt="Image 7" />
            </div>
            <div className="grid-item">
              <img className="grid-image" src="/images/grid8.jpg" alt="Image 8" />
            </div>
            <div className="grid-item">
              <img className="grid-image" src="/images/grid9.jpg" alt="Image 9" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;



