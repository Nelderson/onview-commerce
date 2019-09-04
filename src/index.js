import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './styles/index.css';
import TableController from './components/TableController';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <TableController />
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
