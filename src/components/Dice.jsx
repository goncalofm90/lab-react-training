import React, { Component } from 'react';
import './Dice.css';

const empty = './img/dice-empty.png';
const pictures = [
  './img/dice1.png',
  './img/dice2.png',
  './img/dice3.png',
  './img/dice4.png',
  './img/dice5.png',
  './img/dice6.png',
];
class Dice extends Component {
  constructor() {
    super();
    this.state = {
      image: pictures[Math.floor(Math.random() * (pictures.length + 1))],
    };
  }
  handleDiceClick = () => {
    this.setState({
      image: empty,
    });
    setTimeout(() => {
      let diceNumber = Math.floor(Math.random() * (pictures.length + 1));
      this.setState({
        image: pictures[diceNumber],
      });
    }, 1000);
  };
  render() {
    return (
      <div>
        <h1>Roll the Dice!</h1>
        <img src={this.state.image} alt="dice" onClick={this.handleDiceClick} />
      </div>
    );
  }
}
export default Dice;
