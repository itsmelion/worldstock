import { FETCH_STOCKS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_STOCKS:
      return action.payload;
    default:
      return state;
  }
}
