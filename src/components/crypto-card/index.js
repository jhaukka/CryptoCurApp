import React from "react";
import fetch from "isomorphic-fetch";
import coin from "../../images/eth-coin.png";
// import "../../server.js";

class CryptoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      value: null,
      marketvalue: null,
      symbol: props.symbol
    };

    this.pollValue = this.pollValue.bind(this);
  }

  // Päivittää tiedot, joka 10 sekuntin välein
  componentDidMount() {
    this.pollValue();
    setInterval(this.pollValue, 10000);
  }

  // Haetaan tieto json-tietokannasta
  pollValue() {
    const { symbol } = this.state;
    fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,EOS&tsyms=${symbol},EUR&api_key=047ee697a82cc136e4216a3d7f1b00d551787d9d4d47307951f8b11d10707c92`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState(prevState => ({
          value: json.DISPLAY.ETH.EUR.PRICE,
          marketvalue: json.DISPLAY.ETH.EUR.MKTCAP,
          symbol: json.RAW.ETH.EUR.FROMSYMBOL
        }));
        console.log(json);
      });
  }

  // Haetaan tieto MySQL-tietokannasta
  pollInfo() {}

  // Tulostetaan näytölle
  render() {
    const { name, value, marketvalue, symbol } = this.state;
    return (
      <div className="container shadow-sm">
        <div className="row">
          <div className="col-sm-12 bg blue info">
            <img src={coin} className="coin" alt="Coin" />
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
            <h3 className="title">Kuvaus ({symbol}) valuutasta</h3>
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
