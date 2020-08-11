import React from 'react';
import './ClickablePicture.css';

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
      <button className="clickablepicture" onClick={this.handleLikeButtonClick}>
        {this.state.liked ? (
          <img
            src="https://i.ibb.co/1RX6Rj7/imageonline-co-overlayed-image.png"
            alt=""
          />
        ) : (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/15/John_Cena_interview_2018.jpg"
            alt=""
          />
        )}
      </button>
    );
  }
}

export default LikeButton;
