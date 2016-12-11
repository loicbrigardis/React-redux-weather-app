require('./cardClear.scss');

import React, { Component } from 'react';

class CardClear extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <li className="card">
      <div className="card-title">
        <h5>{this.props.citydata.name}</h5>
        <span>{this.props.citydata.time}</span>
      </div>
      <div className="card-deco">
        <div className="card-clear">
          <div className="card-circ-06"></div>
          <div className="card-circ-05"></div>
          <div className="card-circ-04"></div>
          <div className="card-circ-03"></div>
          <div className="card-circ-02"></div>
          <div className="card-circ-01"></div>
          <div className="card-circ-00"></div>
        </div>
        <div className="card-temp">
          {this.props.citydata.temp}
        </div>
      </div>
      <div className="card-next">
        <ul>
          <li>{this.props.citydata.dayOne} {this.props.citydata.dayOneWeather} {this.props.citydata.dayOneTempMin}°/{this.props.citydata.dayOneTempMax}°</li>
          <li>{this.props.citydata.dayTwo} {this.props.citydata.dayTwoWeather} {this.props.citydata.dayTwoTempMin}°/{this.props.citydata.dayTwoTempMax}°</li>
          <li>{this.props.citydata.dayThree} {this.props.citydata.dayThreeWeather} {this.props.citydata.dayThreeTempMin}°/{this.props.citydata.dayThreeTempMax}°</li>
        </ul>
      </div>
    </li>
    )
  }
}

export default CardClear;
