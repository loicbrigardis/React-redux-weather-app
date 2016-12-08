import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer';

const rootReducer = combineReducers({
  cities: weatherReducer
});

export default rootReducer;
