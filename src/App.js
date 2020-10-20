import React, { Component } from 'react';
import './app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home } from './Home';
import { MainNav } from './components/MainNav';
import { Footer } from './components/Footer';

class App extends Component {
  componentDidMount(){
    AOS.init({
      duration : 1500
    })
  }
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