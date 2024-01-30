import './index.css';
import React from 'react';
import App from './App/App';
import Provider from './Provider';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
      <App /> 
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
