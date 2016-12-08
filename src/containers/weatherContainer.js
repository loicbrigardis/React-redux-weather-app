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

  onChange(event) {
    this.setState({term: event.target.value});
  }

  onKeyEnter(event) {
    if(event.charCode==13){
      this.props.addCard(this.state.term);
      console.log(this.props.cities);
      this.setState({term: ''});
    }
  }

  render () {
    return (
      <div>
        <div className="inputs">
          <label className="input_icon">
            <input
            type="text"
            maxLength="20"
            value={this.state.term}
            onChange={this.onChange.bind(this)}
            onKeyPress={this.onKeyEnter.bind(this)} />
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

function mapStateToProps (state) {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps, { addCard }) (WeatherContainer);
