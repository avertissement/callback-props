import React from 'react';
import './Card.css';

function Card(props) {
  const { content, handleDelete, id, title } = props;
  const contentHTML = <p>{content}</p>;
  const titleHTML   = <h3>{title}</h3>;

  return (
    <div className="Card">
      <button
        onClick={() => handleDelete(id)}
        type="button">
          delete
      </button>
      {title && titleHTML}
      {content && contentHTML}
    </div>
  )
}

export default Card;