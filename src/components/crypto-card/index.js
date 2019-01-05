import React from "react";

class CryptoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      value: props.value,
      marketvalue: props.value,
      coin: props.coin
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-12 blue">Kolikko</div>
          <div className="col-sm-6 col-lg-12 green">
            <div className="static-name right">{this.state.name}</div>
            <br />
            <div className="static-name right">Kurssi</div>
            <div className="coin-valuation right">{this.state.value}</div>
            <br />
            <div className="static-name right">Markkina-arvo</div>
            <div className="coin-market-value right">
              {this.state.marketvalue}
            </div>
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
