import React, { Component } from 'react';
import Header from './header.js';
import Menu from './menu.js';
import Slider from './slider.js';

class App extends Component {
  render() {
    return (
      <div class="wrapper"> 
        <Header />
        <Menu />
        <Slider />
      </div>
    );
  }
}

export default App;
