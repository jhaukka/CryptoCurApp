import React, { Component } from "react";
import "./css/style.css";
import Swiper from "./components/swiper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Swiper name="ScrollView" />
      </div>
    );
  }
}

export default App;
