/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { Component } from 'react';
import Button from './button/button';
import styles from './styles/main.scss';
import FancyButton from './fancy-button/fancy-button';

const content = 'Hello world!';

class App extends Component {
  render() {
    return (
        <>
            <div className={styles['resizeable-both']}>{content}</div>
        <Button label="Regular Button"/>
        <FancyButton label="Fancy Button"/>
      </>
    );
  }
}

export default App;