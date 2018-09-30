import { FETCH_STOCKS } from './types';

export function fetchStocks() {
  const URI = `${process.env.API}/stock/market/collection/list?collectionName=in-focus`;
  const payload = fetch(URI)
    .then(response => response.json());

  return {
    type: FETCH_STOCKS,
    payload,
  };
}
