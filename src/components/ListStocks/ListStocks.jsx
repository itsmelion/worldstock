import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
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
      <ul id="ListStocks" className="column">
        {stocks.map(({ companyName, symbol }) => (
          <Link to={`/${symbol}`} key={symbol}>{companyName}</Link>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ stocks }) => ({ stocks });

export default connect(mapStateToProps, actions)(ListStocks);
