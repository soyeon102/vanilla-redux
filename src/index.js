import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import store from './redux/config/configStore';
import { Provider } from 'react-redux';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
