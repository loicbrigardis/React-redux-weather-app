require ('./weatherContainer.scss');

import React, { Component } from 'react';

import CardClear from './cards/cardClear';
import CardRain from './cards/CardRain';

class WeatherContainer extends Component {
  render () {
    return (
      <ul className="cards">
        <CardClear />
        <CardRain />
      </ul>
    )
  }
}

export default WeatherContainer;
