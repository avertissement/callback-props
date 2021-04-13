import React from 'react';
import './Card.css';

function Card(props) {
  const { belongsTo, cardId, content, handleDelete, title } = props;
  const contentHTML = <p>{content}</p>;
  const titleHTML   = <h3>{title}</h3>;

  return (
    <div className="Card">
      <button
        onClick={() => handleDelete(cardId, belongsTo)}
        type="button">
          delete
      </button>
      {title && titleHTML}
      {content && contentHTML}
    </div>
  )
}

export default Card;