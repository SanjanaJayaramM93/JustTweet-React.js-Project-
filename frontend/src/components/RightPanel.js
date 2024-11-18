import React, { Component } from 'react';

class RightPanel extends Component {
  render() {
    const { friends } = this.props;

    return (
      <div  className="right-panel" style={{backgroundColor: '#E1E8ED' ,height:'100vh'}}>
        <h4>Who to Follow</h4>
        <div className="refresh-view-all">
          <p>Refresh</p>
          <p>View All (<a href="#">3</a>)</p>
        </div>
        {friends.map((friend) => (
          <div className="profile" key={friend.id}>
            <div className="profile-image">
            <img className='friend-image' src={friend.image} alt="Profile" />

            </div>
            <div className="profile-details">
              <p>{friend.name}</p>
              <p>{friend.email}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default RightPanel;





