import { combineReducers } from 'redux';
import stocksReducer from './stocks.reducer';

export default combineReducers({
  stocks: stocksReducer,
});
