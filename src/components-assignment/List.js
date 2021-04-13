import React from 'react';
import Card from './Card.js';
import './List.css';

function List({ cards, handleAdd, handleDelete, title }) {
  const intermediate = cards.map(card => {
    const {content, id, title } = card;
    return (
      <Card
        content={content}
        handleDelete={handleDelete}
        id={id}
        key={id}
        title={title} 
      />
    )
  })

  return (
    <section className="List">

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