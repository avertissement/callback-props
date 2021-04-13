import React from 'react';
import Card from './Card.js';
import './List.css';

function List({ handleAdd, handleDelete, hasCards, listId, title }) {
  const intermediate = hasCards.map(card => {
    const {cardId, content, title } = card;
    return (
      <Card
        belongsTo={listId}
        cardId={cardId}
        content={content}
        handleDelete={handleDelete}
        key={cardId}
        title={title} 
      />
    )
  })

  return (
    <section className="List" id={listId}>

      <header className="List-header">
        <h2>{title}</h2>
      </header>

      <div className="List-cards">
        {intermediate}
        <button
          className="List-add-button"
          onClick={() => handleAdd(title)}
          type="button">
            + Add Random Card
        </button>
      </div>
    </section>
  )
}

export default List;