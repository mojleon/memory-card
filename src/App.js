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
import Footer from "./components/Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      picked: [],

      score: 0,
      hiscore: 0,

      slainList: false,
    };

    this.clickCard = this.clickCard.bind(this);
    this.toggleSlained = this.toggleSlained.bind(this);
  }

  toggleSlained(event) {
    event.target.classList.toggle("active");
    this.setState({ slainList: !this.state.slainList });
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

  youWon() {
    if(!this.state.slainList) alert("GUTS WITH HIS BERSERKER RAGE WAS SUCCESSFUL IN KILLING ALL THE APOSTLES AND SO CALLED ANGELS!");
    else alert("GUTS WAS SUCCESSFUL BUT HE CHEATED BY KEEPING A LIST ON WHICH APOSTLES HE HAD KILLED... WHAT A LOSER...");
    this.incrementScore();
    this.reset();
  }

  gameOver() {
    alert(
      "GUTS IN HIS BERSERKER RAGE ATTACKED AN ENEMY THAT WAS ALREADY DEAD AND THIS LITTLE MISTAKE COST HIM HIS LIFE!"
    );
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
    if (this.state.picked.length === 11) return this.youWon();
    this.state.picked.push(event.target.id);
    this.incrementScore();
    this.shuffle();
  }

  render() {
    return (
      <div className="App">
        <Header
          toggleSlained={this.toggleSlained}
          score={this.state.score}
          hiscore={this.state.hiscore}
        />
        <main className="cards">
          <Card
            number="1"
            name="Bishop Mozgus"
            image={BishopMozgus}
            clickCard={this.clickCard}
            slain={this.state.slainList && this.state.picked.includes("1")}
          />
          <Card
            number="2"
            name="Conrad"
            image={Conrad}
            clickCard={this.clickCard}
            slain={this.state.slainList && this.state.picked.includes("2")}
          />
          <Card
            number="3"
            name="Count slug"
            image={CountSlug}
            clickCard={this.clickCard}
            slain={this.state.slainList && this.state.picked.includes("3")}
          />
          <Card
            number="4"
            name="Femto"
            image={Femto}
            clickCard={this.clickCard}
            slain={this.state.slainList && this.state.picked.includes("4")}
          />
          <Card
            number="5"
            name="Grunbeld"
            image={Grunbeld}
            clickCard={this.clickCard}
            slain={this.state.slainList && this.state.picked.includes("5")}
          />
          <Card
            number="6"
            name="Rape horse"
            image={RapeHorse}
            clickCard={this.clickCard}
            slain={this.state.slainList && this.state.picked.includes("6")}
          />

          <Card
            number="7"
            name="Rosine"
            image={Rosine}
            clickCard={this.clickCard}
            slain={this.state.slainList && this.state.picked.includes("7")}
          />
          <Card
            number="8"
            name="Slan"
            image={Slan}
            clickCard={this.clickCard}
            slain={this.state.slainList && this.state.picked.includes("8")}
          />
          <Card
            number="9"
            name="Ubik"
            image={Ubik}
            clickCard={this.clickCard}
            slain={this.state.slainList && this.state.picked.includes("9")}
          />
          <Card
            number="10"
            name="Void"
            image={Void}
            clickCard={this.clickCard}
            slain={
              this.state.slainList && this.state.picked.includes("10")
            }
          />
          <Card
            number="11"
            name="Wyad"
            image={Wyad}
            clickCard={this.clickCard}
            slain={
              this.state.slainList && this.state.picked.includes("11")
            }
          />
          <Card
            number="12"
            name="Zodd"
            image={Zodd}
            clickCard={this.clickCard}
            slain={
              this.state.slainList && this.state.picked.includes("12")
            }
          />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
