require ('./weatherContainer.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../actions/index';

import CardClear from './cards/cardClear';
import CardRain from './cards/CardRain';

class WeatherContainer extends Component {

  onKeyEnter(event) {
    if(event.charCode==13){
      this.props.addCard(event.target.value);
      event.currentTarget.value = "";
    }
  }

  cityCard (cityData) {
    const weatherMain = cityData.list["0"].weather["0"].main;

    if(!cityData) {
      return <div></div>
    } else {
      switch (weatherMain) {
        case 'Clear':
            return <CardClear key={cityData.city.id} name={cityData.city.name} />
        case 'Rain':
            return <CardRain key={cityData.city.id} name={cityData.city.name} />
        default:
          console.log("Weather case : " + weatherMain + " doesn't exist atm");
      }
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
            onKeyPress={this.onKeyEnter.bind(this)} />
          </label>
        </div>

        <ul className="cards">
          {this.props.cities.map(this.cityCard)}
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
