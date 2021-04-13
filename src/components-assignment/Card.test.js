import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';

describe('Card Component', () => {
    it('renders without issues', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})