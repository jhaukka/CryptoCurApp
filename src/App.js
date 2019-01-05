import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="coin-name">Ethereum</div>
        <br />
        <div class="static-name">Kurssi</div>
        <div class="coin-valuation">118,32 €</div>
        <br />
        <div class="static-name">Markkina-arvo</div>
        <div class="coin-market-value">24 mrd.€</div>
      </div>
    );
  }
}

export default App;
