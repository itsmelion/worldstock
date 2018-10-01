import { combineReducers } from 'redux';
import stocksReducer from './stocks.reducer';
import symbolsReducer from './symbols.reducer';

export default combineReducers({
  stocks: stocksReducer,
  symbols: symbolsReducer,
});
