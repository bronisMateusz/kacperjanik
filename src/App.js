import React, { Component } from 'react';
import './App.css';

import { Home } from './Home';
import { MainNav } from './components/MainNav';
import { Footer } from './components/Footer';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <MainNav />
        <Home />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;