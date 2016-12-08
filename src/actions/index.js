
import axios from 'axios';

export const ADD_CARD = 'ADD_CARD';

const API_KEY = '2adf3e90362702fba1dbdfe4b7766d12';
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast?';
// http://api.openweathermap.org/data/2.5/forecast?q=London&appid=?id=524901&appid=${API_KEY}

export function addCard (city) {
  const URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
  const request = axios.get(URL);


  return {
    type: ADD_CARD,
    payload: request
  }
}
