import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Welcome from './components/Home/Welcome';
import './styles/main.scss';
import './styles/scss/main.scss';
import Requests from './components/Requests/Requests.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/requests" component={Requests} />
            <Route path="/" exact component={Welcome} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
