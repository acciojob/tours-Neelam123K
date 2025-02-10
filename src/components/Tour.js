import React, { useState } from 'react';

const Tour = ({ tour, onDelete }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { id, name, info, image, price } = tour;

  const toggleInfo = () => {
    setIsExpanded(!isExpanded);
  }
  return (
    <div>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p id={`tour-item-para-${id}`}>{isExpanded ? info : `$info.substring(0, 200)}...`}</p>
      <button id={`see-more-${id}`}>{isExpanded ? "Sho less" : "see more"}

      </button>
      <p>${price}</p>
      <button id={`delete-btn-${id}`} onClick={() => onDelete(id)}>Delete tour</button>
    </div>
  );
}

export default Tour;
