import React from 'react';
import './Greetings.css';

const Greetings = (props) => {
  let phrase;

  switch (props.lang) {
    case 'de':
      phrase = 'Hallo';
      break;
    case 'en':
      phrase = 'Hello';
      break;
    case 'es':
      phrase = 'Hola';
      break;
    case 'fr':
      phrase = 'Salut';
      break;

    default:
      phrase = 'Olá';
  }
  return (
    <div>
      <h4>
        {' '}
        {phrase} {props.children}{' '}
      </h4>
    </div>
  );
};

export default Greetings;
