import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ className, target, title, description, link }) => {
  return (
    <Link to={link} target={target} className={`comp-card ${className}`}>
      <h3>{title}</h3>
      {description ? <p>{description}</p> : null}
    </Link>
  );
};

export default Card;