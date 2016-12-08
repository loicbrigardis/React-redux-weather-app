import { ADD_CARD } from '../actions/index';

export function weatherReducer (state = null, action) {
  switch (action.type) {
    case ADD_CARD:
      return {...state, ...action.payload.data};
    default:
      return state;
  }
}
