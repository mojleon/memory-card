import React, { Component } from 'react';

import Aquarius from '../src/assets/images/Aquarius.svg';
import Aries from '../src/assets/images/Aries.svg';
import Cancer from '../src/assets/images/Cancer.svg';
import Capricorn from '../src/assets/images/Capricorn.svg';
import Gemini from '../src/assets/images/Gemini.svg';
import Leo from '../src/assets/images/Leo.svg';

import Libra from '../src/assets/images/Libra.svg';
import Pisces from '../src/assets/images/Pisces.svg';
import Sagittarius from '../src/assets/images/Sagittarius.svg';
import Scorpio from '../src/assets/images/Scorpio.svg';
import Taurus from '../src/assets/images/Taurus.svg';
import Virgo from '../src/assets/images/Virgo.svg';

import './App.scss';

import Card from './components/Card.jsx'
import Header from './components/Header.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picked: [],
      
      score: 0,
      hiscore: 0
    }
    
    this.clickCard = this.clickCard.bind(this)
  }

  componentDidMount() {
    this.shuffle()
  }

  reset() {
    this.state.picked = [];
    this.setState({score: 0});
  }

  incrementScore() {
    this.setState({score: (this.state.score += 1)});
    if(this.state.score > this.state.hiscore) this.setState({hiscore: (this.state.hiscore += 1)});
  }

  gameOver() {
    alert('GAME OVER')
    this.reset();
  }

  shuffle() {
    var cards = document.querySelector('.cards');
    for (var i = cards.children.length; i >= 0; i--) {
        cards.appendChild(cards.children[Math.random() * i | 0]);
    }
    
  }

  clickCard(event) {
    if(this.state.picked.includes(event.target.id)) return this.gameOver();
    this.state.picked.push(event.target.id);
    this.incrementScore();
    this.shuffle();
  }

  render() {
    return (
      <div className="App">
          <Header score={this.state.score} hiscore={this.state.hiscore}/>
          <main className="cards">
            <Card number="1" image={Aquarius} clickCard={this.clickCard}/>
            <Card number="2" image={Aries} clickCard={this.clickCard}/>
            <Card number="3" image={Cancer} clickCard={this.clickCard}/>
            <Card number="4" image={Capricorn} clickCard={this.clickCard}/>
            <Card number="5" image={Gemini} clickCard={this.clickCard}/>
            <Card number="6" image={Leo} clickCard={this.clickCard}/>

            <Card number="7" image={Libra} clickCard={this.clickCard}/>
            <Card number="8" image={Pisces} clickCard={this.clickCard}/>
            <Card number="9" image={Sagittarius} clickCard={this.clickCard}/>
            <Card number="10" image={Scorpio} clickCard={this.clickCard}/>
            <Card number="11" image={Taurus} clickCard={this.clickCard}/>
            <Card number="12" image={Virgo} clickCard={this.clickCard}/>
          </main>
      </div>
    );
  }
}

export default App;
