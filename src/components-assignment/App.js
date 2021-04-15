import React from 'react';
import List from './List.js';
import './App.css';
import data from './mocks.json';


class App extends React.Component {

  state = {
    "lists": [
      {
        "listId":   "1",
        "header":   "First list",
        "hasCards": [ "a", "b", "e", "f", "g", "j", "l", "m" ]
      },
      {
        "listId":   "2",
        "header":   "Second list",
        "hasCards": ["b", "c", "d", "f", "h", "i", "k"]
      },
      {
        "listId":   "3",
        "header":   "Third list",
        "hasCards": [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m" ]
      },
      {
        "listId":   "4",
        "header":   "Fourth list",
        "hasCards": [ "l", "m" ]
      }
    ],
    "allCards": {
      "a": { "cardId": "a", "title": "First card",      "content": "lorem ipsum" },
      "b": { "cardId": "b", "title": "Second card",     "content": "lorem ipsum" },
      "c": { "cardId": "c", "title": "Third card",      "content": "lorem ipsum" },
      "d": { "cardId": "d", "title": "Fourth card",     "content": "lorem ipsum" },
      "e": { "cardId": "e", "title": "Fifth card",      "content": "lorem ipsum" },
      "f": { "cardId": "f", "title": "Sixth card",      "content": "lorem ipsum" },
      "g": { "cardId": "g", "title": "Seventh card",    "content": "lorem ipsum" },
      "h": { "cardId": "h", "title": "Eighth card",     "content": "lorem ipsum" },
      "i": { "cardId": "i", "title": "Ninth card",      "content": "lorem ipsum" },
      "j": { "cardId": "j", "title": "Tenth card",      "content": "lorem ipsum" },
      "k": { "cardId": "k", "title": "Eleventh card",   "content": "lorem ipsum" },
      "l": { "cardId": "l", "title": "Twelfth card",    "content": "lorem ipsum" },
      "m": { "cardId": "m", "title": "Thirteenth card", "content": "lorem ipsum" }
    }
  }

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

  handleAdd = (listId) => {
    const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
    const newRandomCard = () => {
      return {
        cardId: id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    const gettingList = this.state.lists.filter(list => list.listId === listId)[0]
    const newListHasCards = gettingList.hasCards.push(id)
    this.state.allCards[id] = newRandomCard()
    this.setState({
      ...gettingList,
      hasCards: newListHasCards
    })
  }

  handleDelete = (cardId, listId) => {
    const matchedList = this.state.lists.find(list => list.listId === listId);
    const filteredHasCards = matchedList.hasCards.filter(card => card !== cardId);
    const updatedSingleList = Object.assign({}, matchedList, {
      ...matchedList,
      hasCards: filteredHasCards
    });
    this.setState(prevState => {
      let targetID;
      return {
        lists: prevState.lists.map((list, index) => {
          for(let i=0; i<list.hasCards.length; i++) {
            if(list.hasCards[i].length > 1) {
              targetID = list.hasCards[i]
            } else {
              targetID = listId - 1
            }
          }
          return cardId === targetID ? updatedSingleList : list
        })
      }
    });
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