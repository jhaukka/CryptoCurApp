import React, { Component } from "react";
import "./css/style.css";
import { Button } from "reactstrap";
import CryptoCard from "./components/crypto-card";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CryptoCard name="Ethereum" value="value" marketvalue="marketvalue" />
      </div>
    );
  }
}

export default App;
