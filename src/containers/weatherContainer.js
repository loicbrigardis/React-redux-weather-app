require ('./weatherContainer.scss');

import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    const dayOne = dayNumberToName(moment().day() + 1);
    const dayTwo = dayNumberToName(moment().day() + 2);
    const dayThree = dayNumberToName(moment().day() + 3);
    const dayOneWeather = cityData.list[8].weather["0"].main;
    const dayOneTempMin = Math.round(cityData.list[8].main.temp_min - 273.15);
    const dayOneTempMax = Math.round(cityData.list[8].main.temp_max - 273.15);
    const dayTwoWeather = cityData.list[18].weather["0"].main;
    const dayTwoTempMin = Math.round(cityData.list[8].main.temp_min - 273.15);
    const dayTwoTempMax = Math.round(cityData.list[8].main.temp_max - 273.15);
    const dayThreeWeather = cityData.list[26].weather["0"].main;
    const dayThreeTempMin = Math.round(cityData.list[8].main.temp_min - 273.15);
    const dayThreeTempMax = Math.round(cityData.list[8].main.temp_max - 273.15);

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

    console.log(cityData);

    function cityProps () {

    }

    if(!cityData) {
      return <div></div>
    } else {
      switch (weatherMain) {
        case 'Clear':
            return <CardClear key={cityData.city.id} name={name} dayOne={dayOne} dayTwo={dayTwo} dayThree={dayThree} dayOneWeather={dayOneWeather} dayTwoWeather={dayTwoWeather} dayThreeWeather={dayThreeWeather} dayOneTempMin={dayOneTempMin} dayOneTempMax={dayOneTempMax} dayTwoTempMin={dayTwoTempMin} dayTwoTempMax={dayTwoTempMax} dayThreeTempMin={dayThreeTempMin} dayThreeTempMax={dayThreeTempMax}
 temp={temp} time={time} />
        case 'Rain':
        case 'Clouds':
            return <CardRain key={cityData.city.id} name={name} dayOne={dayOne} dayTwo={dayTwo} dayThree={dayThree} dayOneWeather={dayOneWeather} dayTwoWeather={dayTwoWeather} dayThreeWeather={dayThreeWeather} dayOneTempMin={dayOneTempMin} dayOneTempMax={dayOneTempMax} dayTwoTempMin={dayTwoTempMin} dayTwoTempMax={dayTwoTempMax} dayThreeTempMin={dayThreeTempMin} dayThreeTempMax={dayThreeTempMax}
 temp={temp} time={time} />
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
