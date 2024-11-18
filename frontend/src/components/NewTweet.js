import React from 'react';


class NewTweet extends React.Component {
  state = {
    tweetText: ''
  };

  handleChange = (event) => {
    this.setState({ tweetText: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const newTweetText = this.state.tweetText.trim();
    if (newTweetText === '') {
      return; // Ignore empty tweets
    }

    this.props.onNewTweet(newTweetText);
    this.setState({ tweetText: '' }); // Reset the input field
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <img
            src="/images/profile1.jpg" // Use the imported profile image
            alt="Profile"
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />
        </div>
        <div>
          <textarea
            value={this.state.tweetText}
            onChange={this.handleChange}
            placeholder="Write your tweet..."
            style={{width:'80vh'}}
          ></textarea>
        </div>
        <button className='twitter-button' type="submit">Tweet</button>
      </form>
    );
  }
}

export default NewTweet;










