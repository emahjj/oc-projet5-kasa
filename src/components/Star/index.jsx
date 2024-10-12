import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FontAwesomeIcon
      key={index}
      icon={faStar}
      className={index < rating ? 'star filled' : 'star'}
    />
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;