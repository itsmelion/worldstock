import React from 'react';
import ListStocks from './ListStocks/ListStocks';
import Search from './Search/Search';
import logo from 'images/logo.svg';

const RouteHome = () => (
  <main>
    <header className="row mt2" align="center center">
      <img className="mr1" src={logo} alt="Logo" width="32" />
      <h4>WorldStock</h4>
    </header>

    <Search />
    <ListStocks />
  </main>
);

export default RouteHome;
