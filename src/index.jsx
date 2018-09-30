import './styles/main.scss';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

require.context('./images/favicons', true);

const RouteHome = () => (
  <main>
    <h1>Hello World</h1>
    <h3>{process.env.API}</h3>
  </main>
);

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
