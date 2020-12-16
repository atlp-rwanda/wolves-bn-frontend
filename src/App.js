import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect
} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Home/Welcome';
import Login from './components/auth/login/login';
import Dashboard from './components/dashboard/dashboard';
import Signup from './components/auth/SignUp/signUp';
import Profile from './components/auth/Profile/Profile.jsx';
import UpdateProfile from './components/auth/Profile/UpdateProfile.jsx';
import Requests from './components/Requests/Requests.jsx';
import ForgotPassword from './components/auth/password/ForgotPassword';
import userList from './components/users/usersList.jsx';
import ResetPassword from './components/auth/password/ResetPassword';
import './App.scss';
import './styles/scss/main.scss';
import RequestForm from './components/Requests/CreateForm/RequestForm.jsx';
import UpdateForm from './components/Requests/updateForm/UpdateForm.jsx';

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

    return (
      <div>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/nav' exact component={Navbar} />
            <Route path="/requests" exact component={Requests} />
            <Route path="/requests/:id" component={UpdateForm} />
            <Route path="/request" component={RequestForm} />
            <Route path="/" exact component={Welcome} />
            <Route exact path="/dashboard" component={Dashboard}/>
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path='/forgotpassword'component={ForgotPassword} />
            <Route path="/userlist" component={userList} />
            <Route path='/resetpassword' exact component={ResetPassword} />

            <PrivateRoute authed={isAuth} path='/profile' component={Profile} />
            <PrivateRoute authed={isAuth} path='/updateprofile' component={UpdateProfile} />
          </Switch>
        </div>
     </div>
    );
  }
}
export default App;
