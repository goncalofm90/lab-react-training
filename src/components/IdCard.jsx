import React from 'react';
import './IdCard.css';

const IdCard = ({
  lastName,
  firstName,
  gender,
  height,
  birthdate,
  picture,
}) => {
  return (
    <div className="IdCard">
      <img src={picture} alt="Idavatar" />
      <h3>First Name:</h3>
      <p>{firstName}</p>
      <h3>Last Name:</h3>
      <p>{lastName} </p>
      <h3>Gender:</h3>
      <p>{gender}</p>
      <h3>Height:</h3>
      <p>{height}</p>
      <h3>Birth:</h3>
      <p>{birthdate.toDateString()}</p>
    </div>
  );
};

export default IdCard;
