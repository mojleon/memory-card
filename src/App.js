import React, { Component } from "react";

import BishopMozgus from "../src/assets/images/Berserk/BishopMozgus.jpg";
import Conrad from "../src/assets/images/Berserk/Conrad.jpg";
import CountSlug from "../src/assets/images/Berserk/CountSlug.jpg";
import Femto from "../src/assets/images/Berserk/Femto.jpg";
import Grunbeld from "../src/assets/images/Berserk/Grunbeld.jpg";
import RapeHorse from "../src/assets/images/Berserk/RapeHorse.jpg";

import Rosine from "../src/assets/images/Berserk/Rosine.jpg";
import Slan from "../src/assets/images/Berserk/Slan.jpg";
import Ubik from "../src/assets/images/Berserk/Ubik.jpg";
import Void from "../src/assets/images/Berserk/Void.jpg";
import Wyad from "../src/assets/images/Berserk/Wyad.jpg";
import Zodd from "../src/assets/images/Berserk/Zodd.jpg";

import "./App.scss";

import Card from "./components/Card.jsx";
import Header from "./components/Header.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picked: [],

      score: 0,
      hiscore: 0,
    };

    this.clickCard = this.clickCard.bind(this);
  }

  componentDidMount() {
    this.shuffle();
  }

  reset() {
    this.state.picked = [];
    this.setState({ score: 0 });
  }

  incrementScore() {
    this.setState({ score: (this.state.score += 1) });
    if (this.state.score > this.state.hiscore)
      this.setState({ hiscore: (this.state.hiscore += 1) });
  }

  gameOver() {
    alert("GAME OVER");
    this.reset();
  }

  shuffle() {
    var cards = document.querySelector(".cards");
    for (var i = cards.children.length; i >= 0; i--) {
      cards.appendChild(cards.children[(Math.random() * i) | 0]);
    }
  }

  clickCard(event) {
    if (this.state.picked.includes(event.target.id)) return this.gameOver();
    this.state.picked.push(event.target.id);
    this.incrementScore();
    this.shuffle();
  }

  render() {
    return (
      <div className="App">
        <Header score={this.state.score} hiscore={this.state.hiscore} />
        <main className="cards">
          <Card
            number="1"
            name="Bishop mozgus"
            image={BishopMozgus}
            clickCard={this.clickCard}
          />
          <Card
            number="2"
            name="Conrad"
            image={Conrad}
            clickCard={this.clickCard}
          />
          <Card
            number="3"
            name="Count slug"
            image={CountSlug}
            clickCard={this.clickCard}
          />
          <Card
            number="4"
            name="Femto"
            image={Femto}
            clickCard={this.clickCard}
          />
          <Card
            number="5"
            name="Grunbeld"
            image={Grunbeld}
            clickCard={this.clickCard}
          />
          <Card
            number="6"
            name="Rape horse"
            image={RapeHorse}
            clickCard={this.clickCard}
          />

          <Card
            number="7"
            name="Rosine"
            image={Rosine}
            clickCard={this.clickCard}
          />
          <Card
            number="8"
            name="Slan"
            image={Slan}
            clickCard={this.clickCard}
          />
          <Card
            number="9"
            name="Ubik"
            image={Ubik}
            clickCard={this.clickCard}
          />
          <Card
            number="10"
            name="Void"
            image={Void}
            clickCard={this.clickCard}
          />
          <Card
            number="11"
            name="Wyad"
            image={Wyad}
            clickCard={this.clickCard}
          />
          <Card
            number="12"
            name="Zodd"
            image={Zodd}
            clickCard={this.clickCard}
          />
        </main>
      </div>
    );
  }
}

export default App;
