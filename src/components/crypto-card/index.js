import React from "react";
import fetch from "isomorphic-fetch";
// Kolikot
import eth from "../../images/eth-coin.png";
import btc from "../../images/btc-coin.png";
import ltc from "../../images/ltc-coin.png";
import eos from "../../images/eos-coin.png";
import xrp from "../../images/xrp-coin.png";

// MySQL yhteys
// import mysql_connect from "../../server.js";

class CryptoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      value: null,
      marketvalue: null,
      symbol: props.symbol,
      tag: props.tag,
      image: null
    };

    this.pollValue = this.pollValue.bind(this);
  }

  // Päivittää tiedot, joka 10 sekuntin välein
  componentDidMount() {
    this.pollValue();
    setInterval(this.pollValue, 10000);
  }

  getImage(code) {
    if (code == "ETH") {
      return eth;
    } else if (code == "BTC") {
      return btc;
    } else if (code == "EOS") {
      return eos;
    } else if (code == "XRP") {
      return xrp;
    } else if (code == "LTC") {
      return ltc;
    }
  }

  // Haetaan tieto json-tietokannasta
  pollValue() {
    const { symbol } = this.state;
    fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,EOS,LTC&tsyms=${symbol},EUR&api_key=047ee697a82cc136e4216a3d7f1b00d551787d9d4d47307951f8b11d10707c92`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          value: json.DISPLAY[this.state.tag].EUR.PRICE,
          marketvalue: json.DISPLAY[this.state.tag].EUR.MKTCAP,
          symbol: json.RAW[this.state.tag].EUR.FROMSYMBOL,
          image: this.getImage(this.state.tag)
        });
        // this.setState(prevState => ({
        //   value: json.DISPLAY.ETH.EUR.PRICE,
        //   marketvalue: json.DISPLAY.ETH.EUR.MKTCAP,
        //   symbol: json.RAW.ETH.EUR.FROMSYMBOL
        // }));
        console.log(json);
      });
  }

  // Haetaan tieto MySQL-tietokannasta
  pollInfo() {}

  // Tulostetaan näytölle
  render() {
    const { name, value, marketvalue, symbol } = this.state;
    return (
      <div className="container shadow">
        <div className="row">
          <div className="col-sm-12 bg blue info">
            <img src={this.state.image} className="coin" alt="coin-image" />

            <div className="static-name title">
              <h1>{name}</h1>
            </div>
            <br />
            <div className="static-name">
              <h2>Kurssi</h2>
            </div>
            <div className="coin-valuation">{value}</div>
            <br />
            <div className="static-name">
              <h2>Markkina-arvo</h2>
            </div>
            <div className="coin-market-value">{marketvalue}</div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 static-info static-name red">
            <h3 className="title">Tietoa valuutasta</h3>
            <div className="tag">Lyhenne: {symbol}</div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum venenatis dictum vulputate. Aliquam vel egestas tellus,
              at hendrerit sem. Mauris metus ex, pulvinar id congue non.
            </p>
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="button"
              aria-pressed="false"
              autoComplete="off"
            >
              Lue lisää
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoCard;
