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
      <ul className="contain column ListStocks">
        {stocks.map(stock => (
          <Link
            to={`/${stock.symbol}`}
            key={stock.symbol}
            className="row mv1 stock"
            align="between center"
          >
            <div>
              <h5>{stock.companyName}</h5>
              <sub>{stock.symbol}</sub>
            </div>

            <div>
              <h5>${stock.latestPrice}</h5>
            </div>
          </Link>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ stocks }) => ({ stocks });

export default connect(mapStateToProps, actions)(ListStocks);
