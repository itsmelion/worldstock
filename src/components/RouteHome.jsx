import React from 'react';
import ListStocks from './ListStocks/ListStocks';
import Search from './Search/Search';

const RouteHome = () => (
  <main>
    <Search />
    <ListStocks />
  </main>
);

export default RouteHome;
