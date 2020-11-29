import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import store from './redux/store';

axios.defaults.baseURL = 'http://localhost:5000/';

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>,
document.getElementById('root'));
