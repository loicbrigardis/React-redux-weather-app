require('./cardClear.scss');

import React, { Component } from 'react';

class CardClear extends Component {
  render () {
    return (
      <li className="card">
      <div className="card-title">
        <h5>berlin</h5>
        <span>Mon, 5AM</span>
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
          25
        </div>
      </div>
      <div className="card-next">
        <ul>
          <li>TUES ICON 25°/32°</li>
          <li>TUES ICON 25°/32°</li>
          <li>TUES ICON 25°/32°</li>
        </ul>
      </div>
    </li>
    )
  }
}

export default CardClear;
