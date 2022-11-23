import React, { Component } from 'react';

import BlackPawn from '../src/assets/images/Black-pawn.svg';
import BlackRook from '../src/assets/images/Black-rook.svg';
import BlackBishop from '../src/assets/images/Black-bishop.svg';
import BlackKnight from '../src/assets/images/Black-knight.svg';
import BlackKing from '../src/assets/images/Black-king.svg';
import BlackQueen from '../src/assets/images/Black-queen.svg';

import WhitePawn from '../src/assets/images/White-pawn.svg';
import WhiteRook from '../src/assets/images/White-rook.svg';
import WhiteBishop from '../src/assets/images/White-bishop.svg';
import WhiteKnight from '../src/assets/images/White-knight.svg';
import WhiteKing from '../src/assets/images/White-king.svg';
import WhiteQueen from '../src/assets/images/White-queen.svg';

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

  reset() {
    this.state.picked = [];
    this.state.score = 0;
  }

  incrementScore() {
    this.state.score++;
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
            <Card number="1" image={BlackPawn} clickCard={this.clickCard}/>
            <Card number="2" image={BlackRook} clickCard={this.clickCard}/>
            <Card number="3" image={BlackBishop} clickCard={this.clickCard}/>
            <Card number="4" image={BlackKnight} clickCard={this.clickCard}/>
            <Card number="5" image={BlackKing} clickCard={this.clickCard}/>
            <Card number="6" image={BlackQueen} clickCard={this.clickCard}/>

            <Card number="7" image={WhitePawn} clickCard={this.clickCard}/>
            <Card number="8" image={WhiteRook} clickCard={this.clickCard}/>
            <Card number="9" image={WhiteBishop} clickCard={this.clickCard}/>
            <Card number="10" image={WhiteKnight} clickCard={this.clickCard}/>
            <Card number="11" image={WhiteKing} clickCard={this.clickCard}/>
            <Card number="12" image={WhiteQueen} clickCard={this.clickCard}/>
          </main>
      </div>
    );
  }
}

export default App;
