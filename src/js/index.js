// SCSS Styling
import '../sass/main.scss';
// React
import React from 'react';
import Reactdom from 'react-dom';
import App from './app';
// React Router
import { BrowserRouter } from 'react-router-dom';
// Redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

Reactdom.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
