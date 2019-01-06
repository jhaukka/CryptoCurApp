import React from "react";
import fetch from "isomorphic-fetch";

class CryptoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      value: null,
      lastValue: null,
      marketvalue: props.marketcap
    };
  }

  componentDidMount() {
    const { symbol } = this.state;
    fetch(
      `https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=${symbol},EUR&api_key=047ee697a82cc136e4216a3d7f1b00d551787d9d4d47307951f8b11d10707c92`
    )
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          value: json.EUR
        });
        console.log(json);
      });
  }

  render() {
    const { name, value, marketvalue } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-12 blue">Kolikko</div>
          <div className="col-sm-6 col-lg-12 green">
            <div className="static-name right">{name}</div>
            <br />
            <div className="static-name right">Kurssi</div>
            <div className="coin-valuation right">{value}</div>
            <br />
            <div className="static-name right">Markkina-arvo</div>
            <div className="coin-market-value right">{marketvalue}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 red">
            <h3>Tietoa valuutasta</h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            venenatis dictum vulputate. Aliquam vel egestas tellus, at hendrerit
            sem. Mauris metus ex, pulvinar id congue non, mollis ac enim. Mauris
            sem odio, tempus sit amet ultricies id, malesuada at quam. Vivamus
            elementum posuere orci ut elementum.
          </div>
        </div>
      </div>
    );
  }
}

export default CryptoCard;
