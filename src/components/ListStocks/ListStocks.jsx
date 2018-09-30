import React, { PureComponent } from 'react';

class ListStocks extends PureComponent {
  constructor(props) {
    super(props);
    this.API = process.env.API;
    this.state = {
      stocks: null,
    };
  }

  componentWillMount() {
    this.getTopStocks()
      .then(stocks => this.setState(() => ({ stocks })));
  }

  getTopStocks() {
    return fetch(`${this.API}/stock/market/collection/list?collectionName=in-focus`)
      .then(response => response.json());
  }

  render() {
    const { stocks } = this.state;
    if (!stocks) return null;

    return (
      <ul id="ListStocks">
        {stocks.map(({ companyName, symbol }) => <li key={symbol}>{companyName}</li>)}
      </ul>
    );
  }
}


export default ListStocks;
