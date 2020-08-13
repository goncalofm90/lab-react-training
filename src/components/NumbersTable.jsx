//rafce tab generates component automatically
import React from 'react';

const people = [{ number: '210222333' }];

const NumbersTable = () => {
  return (
    <div>
      {people.map((person) => {
        return <p>{person.number}</p>;
      })}
    </div>
  );
};

export default NumbersTable;
