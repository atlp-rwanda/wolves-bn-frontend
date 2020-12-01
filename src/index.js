import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import axios from 'axios';
import store from './redux/store';
import App from './App';

<<<<<<< HEAD
axios.defaults.baseURL = 'http://localhost:3000/';
// axios.defaults.baseURL = process.env.REACT_APP_URL;
||||||| merged common ancestors
axios.defaults.baseURL = process.env.REACT_APP_URL;
=======
<<<<<<< HEAD
axios.defaults.baseURL = process.env.REACT_APP_URL;
||||||| merged common ancestors
// axios.defaults.baseURL = process.env.REACT_APP_URL;
axios.defaults.baseURL = 'http://localhost:4000/';

=======
axios.defaults.baseURL = process.env.REACT_APP_URL;

>>>>>>> view and update profile
>>>>>>> view and update profile
ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <App />
  </Provider>
</BrowserRouter>,
document.getElementById('root'));
