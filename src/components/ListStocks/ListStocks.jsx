import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class ListStocks extends PureComponent {
  componentDidMount() {
    const { fetchStocks } = this.props;
    fetchStocks();
  }

  render() {
    const { stocks } = this.props;
    if (!stocks) return null;

    return (
      <ul id="ListStocks">
        {stocks.map(({ companyName, symbol }) => <li key={symbol}>{companyName}</li>)}
      </ul>
    );
  }
}

const mapStateToProps = ({ stocks }) => ({ stocks });

export default connect(mapStateToProps, actions)(ListStocks);
