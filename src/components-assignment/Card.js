import React from 'react';
import './Card.css';

function Card(props) {
    const { content, deleteClicking, pseudo, title } = props;
    const contentHTML = <p>{content}</p>;
    const titleHTML   = <h3>{title}</h3>;

    return (
        <div className="Card">
            <button
              onClick={() => deleteClicking(pseudo)}
              type="button">
                delete
            </button>
            {title && titleHTML}
            {content && contentHTML}
        </div>
    )
}

export default Card;