import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Home/Welcome';
import Nav from './components/nav/nav';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import Signup from './components/SignUp/signUp';
import Profile from './components/Profile/Profile.jsx';
import UpdateProfile from './components/Profile/UpdateProfile.jsx';
import Requests from './components/Requests/Requests.jsx';
import ForgotPassword from './components/password/ForgotPassword';
import userList from './components/users/usersList.jsx';
import ResetPassword from './components/password/ResetPassword';
import './styles/main.scss';
import './styles/scss/main.scss';

// eslint-disable-next-line no-shadow
function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (authed === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
    />
  );
}
class App extends Component {
  render() {
    const token = localStorage.getItem('token');
    const isAuth = (token !== null);

    const { isLoggedIn } = this.props;

    if (isLoggedIn) {
      window.location.replace('/login');
    }
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
            <Route path='/forgotpassword'component={ForgotPassword} />
            <Route path="/userlist" component={userList} />
            <Route path='/forgotpassword' component={ForgotPassword} />
            <PrivateRoute authed={isAuth} path='/profile' component={Profile} />
            <PrivateRoute authed={isAuth} path='/updateprofile' component={UpdateProfile} />
            <Route path='/resetpassword' component={ResetPassword} />
          </Switch>
        </div>
     </div>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  isLoggedIn: login.isLoggedIn
});

export default connect(mapStateToProps)(App);
