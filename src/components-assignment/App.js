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

  getTargetCard = cardId => {
    let targetCard = null;
    this.state.lists.forEach(list => {
      for(let i=0; i<list.hasCards.length; i++) {
        if(list.hasCards[i].length > 0 && list.hasCards[i] === cardId) targetCard = list.hasCards[i];
        if(list.hasCards[i].length === 0 || !cardId) console.error('ERROR: Unknonwn Id');
      }
    });
    return targetCard;
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
    const targetId = this.getTargetCard(cardId);
    const matchedList = this.state.lists.find(list => list.listId === listId);
    const filteredHasCards = matchedList.hasCards.filter(card => card !== targetId);
    const updatedMatchedList = Object.assign({}, matchedList, {
      ...matchedList,
      hasCards: filteredHasCards
    });
    const listToReplaceIndex = listId - 1;
    this.setState(prevState => ({
      lists: prevState.lists.map((list, index) => {
        return index === listToReplaceIndex ? updatedMatchedList : list;
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