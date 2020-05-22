import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      allSushi: [],
      cursor: 0,
      coh: 75
    }
  }

  componentDidMount() {
    fetch(API).then(r => r.json()).then(sushi => this.setState({ allSushi: sushi }));
  }

  showSushi = () => {
    return this.state.allSushi.slice(this.state.cursor, 4 + this.state.cursor)
  }

  showMoreSushi = () => {
    this.setState({ cursor: this.state.cursor + 4 })
  }

  eatSushi = (piece) => {
    console.log(piece.price)
    if (piece.price <= this.state.allSushi.filter(sushi => sushi.eaten).reduce((a, c) => a - c.price, this.state.coh)){ 
      this.setState({
        allSushi: this.state.allSushi.map((sushi) => {
          if (sushi.id === piece.id) {
            sushi.eaten = true;
          }
          return sushi;
        })
      })
    } else { alert("get a job")}
  }

  eatenSushi = () => {
    return this.state.allSushi.filter(sushi => sushi.eaten)
  }

  cashSpent = () => {
    return this.state.allSushi.filter(sushi => sushi.eaten).reduce((a, c) => a - c.price, this.state.coh)
    
  }

  render() {
    return (
      <div className="app">
        <SushiContainer showSushi={this.showSushi()} handleShowClick={this.showMoreSushi} handleSushiClick={this.eatSushi} />
        <Table showPlate={this.eatenSushi()} pettyCash={this.cashSpent()}/>
      </div>
    );
  }
}

export default App;