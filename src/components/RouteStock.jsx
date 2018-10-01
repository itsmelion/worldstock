import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
// import './RouteStock.scss';

class RouteStock extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      logo: null,
    };
  }

  componentWillMount() {
    const { getQuote, match: { params: { stock } } } = this.props;
    getQuote(stock);
    this.getLogo();
  }

  async getLogo() {
    const { match: { params: { stock } } } = this.props;
    const URL = `${process.env.API}/stock/${stock}/logo`;
    const logo = await fetch(URL)
      .then(response => response.json())
      .then(({ url }) => url);

    this.setState({ logo });
  }

  render() {
    const { stocks, match: { params: { stock } } } = this.props;
    const { logo } = this.state;

    if (stocks && !stocks.length) return null;

    return (
      <main id="RouteStock">
        <header className="row mt2" align="center center">
          <img className="mr1" src={logo} alt="Logo" width="64" />
          <div>
            <h1>{stocks[0].companyName}</h1>
            <sub>{stock}</sub>
          </div>
        </header>
      </main>
    );
  }
}

const mapStateToProps = ({ stocks }) => ({ stocks });
export default connect(mapStateToProps, actions)(RouteStock);
