import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//APP
import App from './App.jsx';

//Style
import './style/index.css';
import "./style/fonts.css";

//Sore
import store from './app/store.jsx';

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)