import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Offer } from './Offer';
import { Contact } from './Contact';
import { NoMatch } from './NoMatch';
import { MainNav } from './components/MainNav';

import { Footer } from './components/Footer';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <MainNav />
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/oferta" component={Offer} />
              <Route path="/kontakt" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;