/* @flow */
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state: {
    pets: any;
  }

  constructor() {
    super();
    this.state = {
      pets: []
    };
  }

  addPet(pet: string) {
    this.setState({pets: this.state.pets.concat(pet)});
  }

  addDog = this.addPet.bind(this, '🐶');
  addCat = this.addPet.bind(this, '🐱');

  render() {
    return (
      <div className="App">

        <h2>Pet Store</h2>
        <button className="App--button" onClick={this.addDog}>🐶</button>
        <button className="App--button" onClick={this.addCat}>🐱</button>

        <ul className="App--animals">
          {this.state.pets.map((pet, index) =>
            <li className="App--animal" key={index}>
              {pet}
            </li>
          )}
        </ul>

      </div>
    );
  }
}

export default App;
