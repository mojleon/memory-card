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

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
          <main className="cards">
            <Card number="1" image={BlackPawn}/>
            <Card number="2" image={BlackRook}/>
            <Card number="3" image={BlackBishop}/>
            <Card number="4" image={BlackKnight}/>
            <Card number="5" image={BlackKing}/>
            <Card number="6" image={BlackQueen}/>

            <Card number="7" image={WhitePawn}/>
            <Card number="8" image={WhiteRook}/>
            <Card number="9" image={WhiteBishop}/>
            <Card number="10" image={WhiteKnight}/>
            <Card number="11" image={WhiteKing}/>
            <Card number="12" image={WhiteQueen}/>
          </main>
      </div>
    );
  }
}

export default App;
