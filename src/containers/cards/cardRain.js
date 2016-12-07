require('./cardRain.scss');

import React, { Component } from 'react';

class CardRain extends Component {
  render () {
    return (
      <li className="card">
            <div className="card-title">
              <h5>berlin</h5>
              <span>Mon, 5AM</span>
            </div>
            <div className="card-deco">
              <div className="card-cloud">
                <div className="cloud-cache">
                  <div className="card-cloud-20"></div>
                  <div className="card-cloud-21"></div>
                  <div className="card-cloud-22"></div>
                  <div className="card-cloud-cache-3"></div>

                  <div className="card-cloud-10"></div>
                  <div className="card-cloud-11"></div>
                  <div className="card-cloud-12"></div>
                  <div className="card-cloud-cache-2"></div>

                  <div className="card-cloud-01"></div>
                  <div className="card-cloud-02"></div>
                  <div className="card-cloud-03"></div>
                  <div className="card-cloud-04"></div>
                  <div className="card-cloud-05"></div>
                  <div className="card-cloud-cache"></div>
                </div>
                <div className="drops"><div className="drop"></div><div className="drop-col"></div></div>
                <div className="drops-2"><div className="drop2"></div><div className="drop-col2"></div></div>
                <div className="drops-3"><div className="drop2"></div><div className="drop-col2"></div></div>
                <div className="drops-4"><div className="drop"></div><div className="drop-col"></div></div>
                <div className="drops-5"><div className="drop"></div><div className="drop-col"></div></div>
                <div className="drops-6"><div className="drop2"></div><div className="drop-col2"></div></div>
                <div className="drops-7"><div className="drop2"></div><div className="drop-col2"></div></div>
                <div className="drops-8"><div className="drop"></div><div className="drop-col"></div></div>

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

export default CardRain;
