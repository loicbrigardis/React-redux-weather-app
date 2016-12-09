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
        <h5>{this.props.name}</h5>
        <span>{this.props.time}</span>
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
          {this.props.temp}
        </div>
      </div>
      <div className="card-next">
        <ul>
          <li>{this.props.dayOne} {this.props.dayOneWeather} {this.props.dayOneTempMin} °/{this.props.dayOneTempMax}°</li>
          <li>{this.props.dayTwo} {this.props.dayTwoWeather}  {this.props.dayTwoTempMin} °/{this.props.dayTwoTempMax}°</li>
          <li>{this.props.dayThree} {this.props.dayThreeWeather}  {this.props.dayThreeTempMin} °/{this.props.dayThreeTempMax}°</li>
        </ul>
      </div>
    </li>
    )
  }
}

export default CardClear;
