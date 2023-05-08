import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import {store} from './store'
import { LoadingProvider } from './context/loading';
axios.defaults.baseURL="https://blogapp-s2xm.onrender.com"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <LoadingProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </LoadingProvider>
    </BrowserRouter>
  </React.StrictMode>
);


