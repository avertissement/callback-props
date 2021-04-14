import React from 'react';
import List from './List.js';
import './App.css';
import data from './mocks.json';


class App extends React.Component {

  state = data;

  listTitle() {
    return (
      this.state.lists.map(list => {
        const { hasCards, header, listId } = list;
        const cards = hasCards.map(card => {
          return this.state.allCards[card];
        });
        return (
          <List
            handleAdd={this.handleAdd}
            handleDelete={this.handleDelete}
            hasCards={cards}
            key={listId}
            listId={listId}
            title={header}
          />
        )
      })
    )
  }

  handleAdd(poss) {
    console.log('clicked! - added', {poss})
  }

  handleDelete = (cardId, listId) => {
    const matchedList = this.state.lists.find(list => list.listId === listId);
    const filteredHasCards = matchedList.hasCards.filter(card => card !== cardId);
    const updatedSingleList = Object.assign({}, matchedList, {
      ...matchedList,
      hasCards: filteredHasCards
    });
    this.setState(prevState => ({
      lists: prevState.lists.map((list, index) => {
        return index === listId - 1 ? updatedSingleList : list
      })
    }));

  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.listTitle()}
        </div>
      </main>
    )
  }
}

export default App;