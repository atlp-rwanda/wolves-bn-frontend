/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Counter from './components/Counter';
import store from './redux/store';
import Nav from './components/nav/nav';
import Login from './components/login/login';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Button from './button/button';
// import FancyButton from './fancy-button/fancy-button';
// import './styles/main.scss';
// import './styles/scss/main.scss';

const content = 'Welcome to barefoot Nomad Application!';

const New = () => (
  <div>
      <h1>WELCOME TO BARE FOOT NOMADE</h1>
    </div>
);

class App extends Component {
  render() {
    // return (
    //   <div>
    //     <div className="light">
    //       <h1>Welcome to Barefoot Nomad Application</h1>
    //       <div className="main">
    //         <div className="div">
    //           <h4>What is Lorem Ipsum?</h4>
    //           <p className="main__paragraph1">
    //             Lorem Ipsum is simpzly dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    //         </div>

    //         <div>
    //           <h4>Why do we use it?</h4>
    //           <p className="main__paragraph2">
    //             It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    //         </div>

    //       </div>

    //     </div>
    //     <div className='resizeable-both'>{content}</div>
    //     <Button className="button" label="Regular Button" />
    //     <FancyButton className="button" label="Fancy Button" />
    //   </>
    // );
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

        <div className="light">
          <h1>Welcome to Barefoot Nomad Application</h1>
          <div className="main">
            <div className="div">
              <h4>What is Lorem Ipsum?</h4>
              <p className="main__paragraph1">
                Lorem Ipsum is simpzly.</p>
            </div>

            <div>
              <h4>Why do we use it?</h4>
              <p className="main__paragraph2">
                It is a long established fact that a reader e (injected humour and the like).</p>
            </div>

          </div>

        </div>
        <div className='resizeable-both'>{content}</div>
        <Button className="button" label="Regular Button" />
        <FancyButton className="button" label="Fancy Button" />
      </>
    );
  }
}

export default App;
