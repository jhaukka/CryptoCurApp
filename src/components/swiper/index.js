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
  /*slide1: {
    background: "#8b2dcc"
  },
  slide2: {
    background: "#703086"
  },
  slide3: {
    background: "#551273"
  },
  slide4: {
    background: "#551273"
  },
  slide5: {
    background: "#e76447"
  }*/
};

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const Swiper = () => (
  <BindKeyboardSwipeableViews>
    <div style={Object.assign({}, styles.slide, styles.slide1)}>
      <CryptoCard name="Ethereum" />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide2)}>
      <CryptoCard name="Bitcoin" />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide3)}>
      <CryptoCard name="EOS" />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide4)}>
      <CryptoCard name="Litecoin" />
    </div>
    <div style={Object.assign({}, styles.slide, styles.slide5)}>
      <CryptoCard name="Ripple" />
    </div>
  </BindKeyboardSwipeableViews>
);

export default Swiper;
