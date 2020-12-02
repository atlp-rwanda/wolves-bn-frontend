import React, {
  Component, useState, useEffect, useRef
} from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Home/Welcome';
import Nav from './components/nav/nav';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Signup from './components/SignUp/signUp';
import './styles/main.scss';
import './styles/scss/main.scss';
import Requests from './components/Requests/Requests.jsx';
import ForgotPassword from './components/ForgotPassword';
import Profile from './components/Profile';
import userList from './components/users/usersList.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Nav />
          <Switch>
            <Route path='/nav' exact component={Navbar} />
            <Route path="/requests" component={Requests} />
            <Route path="/" exact component={Welcome} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Welcome} />
              <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path='/forgotPassword'component={ForgotPassword} />
            <Route path="/userlist" component={userList} />
          </Switch>
        </div>
     </div>
    );
  }
}
export default App;