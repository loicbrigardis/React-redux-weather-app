import { ADD_CARD } from '../actions/index';

export function weatherReducer (state = [], action) {
  switch (action.type) {
    case ADD_CARD:
      return [action.payload.data, ...state];
    default:
      return state;
  }
}
