import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Counter from './components/Counter';
import store from './redux/store';
import Nav from './components/nav/nav';
import Login from './components/login/login';
import Home from './components/home/home';
import Profile from './components/profile/profile';
// import Button from './button/button';
import Button from './button/button.jsx';
import FancyButton from './fancy-button/fancy-button.jsx';
import './styles/main.scss';
import './styles/scss/main.scss';
// const content = 'Welcome to barefoot Nomad Application!';
const New = () => (
  <div><h1>WELCOME TO BARE FOOT NOMADE</h1></div>
);
class App extends Component {
  render() {
    return (
      <>
      <Provider store={store}>
        <React.StrictMode>
          <Counter/>
        </React.StrictMode>
      </Provider>
        <Router>
          <div className="App">
            <Nav />
            <Switch>
              <Route path="/" exact component={New} />
              <Route path="/login" component={Login} />
              <Route path="/home" component={Home} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </div>
        </Router>
        {/* <div className='resizeable-both'>{content}</div> */}
        <Button className="button" label="Regular Button" />
        <FancyButton className="button" label="Fancy Button" />
      </>
    );
  }
}

export default App;
