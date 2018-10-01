import { FETCH_SYMBOLS } from '../actions/types';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SYMBOLS:
      return action.payload;
    default:
      return state;
  }
}
