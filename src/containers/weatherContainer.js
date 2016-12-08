require ('./weatherContainer.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/index'

import CardClear from './cards/cardClear';
import CardRain from './cards/CardRain';

class WeatherContainer extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' };
  }

  handleKeyPress(target) {
    if(target.charCode==13){
            alert('Enter clicked!!!');
    }
  }

  render () {
    return (
      <div>
        <div className="inputs">
          <label className="input_icon">
            <input  type="text" maxLength="20" onKeyPress={this.handleKeyPress} />
          </label>
        </div>

        <ul className="cards">
          <CardClear />
          <CardRain />
        </ul>
      </div>
    )
  }
}

export default connect(null, { addCard }) (WeatherContainer);
