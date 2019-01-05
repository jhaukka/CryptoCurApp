import React, { Component } from "react";
import "./css/style.css";
import { Button } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="container">
          <div class="row">
            <div class="col-">Kolikko</div>

            <div class="col-">
              <div className="coin-name right">Ethereum</div>
              <br />
              <div className="static-name right">Kurssi</div>
              <div className="coin-valuation right">118,32 €</div>
              <br />
              <div className="static-name right">Markkina-arvo</div>
              <div className="coin-market-value right">24 mrd.€</div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-sm-2 col-1">1 of 2</div>
            <div class="col-sm-6 col-2">2 of 2</div>
            <div class="col-sm-4 col-3">1 of 3</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
