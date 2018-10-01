import { FETCH_STOCKS, FETCH_SYMBOLS } from './types';

export async function fetchStocks() {
  const URI = `${process.env.API}/stock/market/collection/list?collectionName=in-focus&displayPercent=true`;
  const payload = await fetch(URI)
    .then(response => response.json());

  return {
    type: FETCH_STOCKS,
    payload,
  };
}

export async function getQuote(symbol = 'AAPL') {
  const URI = `${process.env.API}/stock/${symbol}/quote`;
  const payload = await fetch(URI)
    .then(response => response.json());

  return {
    type: FETCH_STOCKS,
    payload: [payload],
  };
}

export async function fetchSymbols() {
  const URI = `${process.env.API}/ref-data/symbols`;
  let payload = await fetch(URI)
    .then(response => response.json());

  payload = payload.map(({ name, symbol }) => ({ name, symbol }));

  return {
    type: FETCH_SYMBOLS,
    payload,
  };
}
