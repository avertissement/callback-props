import React from 'react';
import './App.css';
import List from './List.js';

class App extends React.Component {

    state = {
        storeIntermediate: {
            lists: [
              {
                id: '1',
                header: 'First list',
                cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
              },
              {
                id: '2',
                header: 'Second list',
                cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
              },
              {
                id: '3',
                header: 'Third list',
                cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
              },
              {
                id: '4',
                header: 'Fourth list',
                cardIds: [ 'l', 'm' ],
              },
            ],
            allCards: {
              'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
              'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
              'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
              'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
              'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
              'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
              'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
              'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
              'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
              'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
              'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
              'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
              'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
            },
          }
    }

    headerOnly() {
        return (
            this.state.storeIntermediate.lists.map(list => {
                const theHeader = list.header
                const theID = list.id
                const forCardIds = list.cardIds.map(cardId => {
                    const begin = this.state.storeIntermediate.allCards[cardId]
                    return begin
                })
                return (
                    <List key={theID} header={theHeader} cards={forCardIds} deleteClicking={this.deleteClickEventHandler} addingClicking={this.addClickEventHandler} />
                )
            })
        )
    }

    addClickEventHandler(poss) {
        console.log('clicked! - added', {poss})
    }

    deleteClickEventHandler = (pseudo) => {
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
                    {this.headerOnly()}
                </div>
            </main>
        )
    }
}

export default App
