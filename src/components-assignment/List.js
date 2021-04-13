import React from 'react';
import './List.css';
import Card from './Card.js';

function List(props) {

    const intermediate = props.cards.map(card => {
        const cardContent = card.content
        const cardTitle = card.title
        const cardThisID = card.id
        return (
            <Card pseudo={cardThisID} key={cardThisID} title={cardTitle} content={cardContent} deleteClicking={props.deleteClicking} />
        )
    })

    return (
        <section className="List">


            <header className="List-header">
                <h2>{props.header}</h2>
            </header>

            <div className="List-cards">
                {intermediate}
            <button type="button" className="List-add-button" onClick={() => props.addingClicking(props.header)}> + Add Random Card</button>
            </div>


        </section>
    )
}

export default List