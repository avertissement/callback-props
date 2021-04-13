import React from 'react';
import List from './List.js';
import './App.css';
import data from './mocks.json';


class App extends React.Component {

  state = data;

  listTitle() {
    return (
      this.state.lists.map(list => {
        const { cardIds, header, listId } = list;
        const cards = cardIds.map(card => {
          return this.state.allCards[card];
        });
        return (
          <List
            cards={cards}
            handleAdd={this.handleAdd}
            handleDelete={this.handleDelete}
            key={listId}
            title={header}
          />
        )
      })
    )
  }

  handleAdd(poss) {
    console.log('clicked! - added', {poss})
  }

  handleDelete = (pseudo) => {
    const firstMatch = this.state.storeIntermediate.lists[0].cardIds.filter(id => id === pseudo)[0]
    const secondMatch = this.state.storeIntermediate.lists[1].cardIds.filter(id => id === pseudo)[0]
    const thirdMatch = this.state.storeIntermediate.lists[2].cardIds.filter(id => id === pseudo)[0]
    const fourthMatch = this.state.storeIntermediate.lists[3].cardIds.filter(id => id === pseudo)[0]
    let filtering
    if(pseudo === firstMatch) {
      filtering = this.state.storeIntermediate.lists[0].cardIds.filter(item => item !== pseudo)
      const localState = Object.assign({}, this.state.storeIntermediate, {
          ...this.state.storeIntermediate.lists[0], 
          cardIds: filtering
      })
      console.log(localState)
      this.setState({
          storeIntermediate: localState
      })
    }
    else if(pseudo === secondMatch) {
      // filtering = this.state.storeIntermediate.lists[1].cardIds.filter(item => item !== pseudo)
      // this.setState({
            
      // })
      alert('COOL!')
    }
    else if(pseudo === thirdMatch) {
      // filtering = this.state.storeIntermediate.lists[2].cardIds.filter(item => item !== pseudo)
      // this.setState({
            
      // })
      alert('COOL!')
    }
    else if(pseudo === fourthMatch) {
      // filtering = this.state.storeIntermediate.lists[3].cardIds.filter(item => item !== pseudo)
      // this.setState({
            
      // })
      alert('COOL!')
    }
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

export default App
