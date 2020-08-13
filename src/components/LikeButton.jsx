import React from 'react';
import './LikeButton.css';

class LikeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      liked: false,
    };
  }

  handleLikeButtonClick = () => {
    this.setState({
      liked: !this.state.liked,
    });
  };

  render() {
    return (
      <button className="likebutton" onClick={this.handleLikeButtonClick}>
        {this.state.liked ? 'Liked' : 'Not liked'}
      </button>
    );
  }
}

export default LikeButton;
