import React from 'react';
import './Random.css';

const Random = (props) => {
  let randomValue = Math.floor(
    Math.random() * (props.max - props.min + props.min)
  );
  return (
    <p>
      random value between {props.min} and {props.max} ={'>'} {randomValue}
    </p>
  );
};
export default Random;
