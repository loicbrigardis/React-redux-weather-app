require ('./weatherContainer.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { addCard } from '../actions/index';
import moment from 'moment';

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
    const name = cityData.city.name;
    const temp = Math.round(cityData.list["0"].main.temp - 273.15, 1);
    const timeStamp = Date.parse(cityData.list["0"].dt_txt);
    const time = moment(timeStamp).format("DD/MM/YYYY HH:mm");
    const dayOne = fetchTemp(1, "day");
    const dayTwo = fetchTemp(2, "day");
    const dayThree = fetchTemp(3, "day");
    const dayOneWeather = fetchTemp(8, "weather");
    const dayOneTempMin = fetchTemp(8, "min");
    const dayOneTempMax = fetchTemp(8, "max");
    const dayTwoWeather = fetchTemp(18, "weather");
    const dayTwoTempMin = fetchTemp(18, "min");
    const dayTwoTempMax = fetchTemp(18, "max");
    const dayThreeWeather = fetchTemp(26, "weather");
    const dayThreeTempMin = fetchTemp(26, "min");
    const dayThreeTempMax = fetchTemp(26, "min");

    const citydata = {name, temp, time, dayOne, dayTwo, dayThree,
      dayOneWeather, dayTwoWeather, dayThreeWeather, dayOneTempMin,
      dayOneTempMax, dayTwoTempMin, dayTwoTempMax, dayThreeTempMin, dayThreeTempMax};

    function fetchTemp (weekNumber, value) {
      switch (value) {
        case "min":
            return Math.round(cityData.list[weekNumber].main.temp_min - 273.15);
        case "max":
            return Math.round(cityData.list[weekNumber].main.temp_max - 273.15);
        case "weather":
            return cityData.list[weekNumber].weather["0"].main;
        case "day":
            return dayNumberToName(moment().day() + [weekNumber]);
        default:
          return false;
      }
    }

    function dayNumberToName (dayNumber) {
      let day;
        switch (dayNumber) {
          case 1: day = 'Mon'; break;
          case 2: day = 'Tue'; break;
          case 3: day = 'Wed'; break;
          case 4: day = 'Thu'; break;
          case 5: day = 'Fri'; break;
          case 6: day = 'Sat'; break;
          case 7: day = 'Sun'; break;
          case 8: day = 'Mon'; break;
          case 9: day = 'Tue'; break;
          default: return false;
        }
      return day;
    }

    if(!cityData) {
      return <div></div>
    } else {
      switch (weatherMain) {
        case 'Clear':
            return <CardClear key={cityData.city.id} citydata={citydata} />
        case 'Rain':
        case 'Clouds':
            return <CardRain key={cityData.city.id} citydata={citydata} />
        default:
          console.log("Weather case : " + weatherMain + " doesn't exist atm");
      }
    }
  }

  render () {
    const transitionOptions = {
      transitionName:"fade",
      transitionEnterTimeout:500,
      transitionLeaveTimeout:300
    }

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

        <ul>
          <ReactCSSTransitionGroup className="cards" {...transitionOptions}>
          {this.props.cities.map(this.cityCard)}
          </ReactCSSTransitionGroup>
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
