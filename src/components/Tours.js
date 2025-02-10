import React from 'react';
import Tour from "./Tour";

const Tours = ({ Tours, onDelete }) => {
  return (
    <div>
      {Tours.map((tour) => (
        <Tour key={tour.id} tour={tour} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Tours;
