import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import { TfgApp } from './TfgApp';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <TfgApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode >
);

