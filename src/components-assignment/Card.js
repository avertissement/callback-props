import React from 'react';
import './Card.css';

function Card(props) {
    const title1 = <h3>{props.title}</h3>
    const content1 = <p>{props.content}</p>
    return (
        <div className="Card">
            <button type="button" onClick={() => props.deleteClicking(props.pseudo)}>delete</button>
            {props.title ? title1 : null}
            {props.content ? content1 : null}
        </div>
    )
}

export default Card