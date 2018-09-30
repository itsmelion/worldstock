import './styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import RouteHome from './components/RouteHome';

require.context('./images/favicons', true);

render(
  <BrowserRouter>
    <>
      <Route exact path="/" component={RouteHome} />
      {/* <Route path="/:stock" component={RouteStock} /> */}
    </>
  </BrowserRouter>,
  document.getElementById('root'),
);
registerServiceWorker();
