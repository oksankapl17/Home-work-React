import React from 'react';
import './UserCard.css';

export const UserCard = ({name, age, gender, hobbies}) => {

  return (
    <div className={'user-card'}>
      <ul>
        <li>{name}</li>
        <li>{age}</li>
        <li>{gender}</li>
        <li>{hobbies}</li>
      </ul>
    </div>
  )
};
