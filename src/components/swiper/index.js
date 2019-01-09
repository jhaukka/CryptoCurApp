import React from "react";
import SwipeableViews from "react-swipeable-views";
import CryptoCard from "../crypto-card";
import { bindKeyboard } from "react-swipeable-views-utils";

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    background: "#fff"
  }
};

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const Swiper = () => (
  <BindKeyboardSwipeableViews>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <CryptoCard name="Ethereum" tag="ETH" />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
      <CryptoCard name="Bitcoin" tag="BTC" />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
      <CryptoCard name="EOS" tag="EOS" />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide4)}>
      <CryptoCard name="Litecoin" tag="LTC" />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide5)}>
      <CryptoCard name="Ripple" tag="XRP" />
    </div>
  </BindKeyboardSwipeableViews>
);

export default Swiper;
