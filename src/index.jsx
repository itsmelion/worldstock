import './styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import RouteHome from './components/RouteHome';
import RouteStock from './components/RouteStock';

require.context('./images/favicons', true);

render(
  <Root>
    <BrowserRouter>
      <>
        <Route exact path="/" component={RouteHome} />
        <Route path="/:stock" component={RouteStock} />
      </>
    </BrowserRouter>
  </Root>,
  document.getElementById('root'),
);
registerServiceWorker();
