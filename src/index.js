import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/store.js';
import { Provider } from 'react-redux';

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>,
  document.getElementById('root')
);

