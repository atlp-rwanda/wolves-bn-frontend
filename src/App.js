import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Home/Welcome';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import store from './redux/store';
import Nav from './components/nav/nav';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Home/Welcome';
import './styles/main.scss';
import './styles/scss/main.scss';
import Requests from './components/Requests/Requests.jsx';
import ForgotPassword from './components/ForgotPassword';
import Login from './components/Login';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/nav' exact component={Navbar} />
            <Route path="/requests" component={Requests} />
            <Route path="/" exact component={Welcome} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/login" exact component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path='/forgotPassword'component={ForgotPassword} />
          </Switch>
        </div>
     </div>
    );
  }
}

export default connect(null)(App);
