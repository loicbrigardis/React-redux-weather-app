import React, { Component } from 'react';

import WeatherContainer from '../containers/weatherContainer';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React simple starter 2</div>
        <WeatherContainer />
      </div>
    );
  }
}
