import React from 'react';

const Card = ({ title, description, onClick }) => {
  return (
    <div className="card">
      <button onClick={onClick}>
        <h3>{title}</h3>
        <p>{description}</p>
      </button>
    </div>
  );
};

export default Card;