import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';
import * as actions from 'actions';
import './Search.scss';

const Autocomplete = ({ items, action }) => items.map(({ symbol, name }, index) => {
  // Limit the list size, to dont slow down the DOM.
  // In real life maybe use a proper autocomplete
  if (index > 199) return null;

  return (
    <button
      key={symbol}
      type="button"
      onClick={action.bind(null, symbol)}
    >
      {name}
    </button>
  );
});

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.searchStockDebounced = debounce(this.searchStock, 1000);
    this.state = {
      showAutocomplete: false,
      symbols: props.symbols,
      loading: true,
    };
  }

  componentDidMount() {
    const { fetchSymbols } = this.props;
    fetchSymbols();
    this.setState({
      loading: false,
    });
  }

  searchStock = (value) => {
    const { symbols } = this.props;
    const name = value.toLowerCase();

    const filteredSymbols = symbols.filter(
      item => item.name && item.name.toLowerCase().includes(name)
    );

    if (filteredSymbols.length) {
      this.setState({
        symbols: filteredSymbols,
        loading: false,
      });
    }
  }

  handleSearch = (e) => {
    this.setState({
      loading: true,
    });

    this.searchStockDebounced(e.target.value);
  }

  handleSymbol = (symbol) => {
    const { getQuote } = this.props;
    this.searchStock(symbol);
    this.toggleAutocomplete(false);
    getQuote(symbol);
  }

  toggleAutocomplete(toggle = false, timeout = 0) {
    setTimeout(() => {
      this.setState({
        showAutocomplete: toggle,
        loading: toggle,
      });
    }, timeout);
  }

  render() {
    const { showAutocomplete, symbols, loading } = this.state;
    const canRenderAutocomplete = !loading || (symbols && symbols.length);

    return (
      <section className="column Search" align="center center">
        <div className="search-container">
          <input
            type="search"
            name="search"
            onFocus={() => this.toggleAutocomplete(true)}
            onBlur={() => this.toggleAutocomplete(false, 300)}
            onKeyUp={this.handleSearch}
          />

          {/* TODO: If input > 1 fetch or split autocomplete to another component */}

          <aside
            className="Autocomplete column"
            style={{ display: showAutocomplete ? '' : 'none' }}
          >
            {
              canRenderAutocomplete
                ? <Autocomplete items={symbols} action={this.handleSymbol} />
                : 'Loading List'
            }
          </aside>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ symbols }) => ({ symbols });

export default connect(mapStateToProps, actions)(Search);
