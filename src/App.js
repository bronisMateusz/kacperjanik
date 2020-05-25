import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './Home';
import { Offer } from './Offer';
import { Contact } from './Contact';
import { LogIn } from './LogIn';
import { NoMatch } from './NoMatch';
import { MainNav } from './components/MainNav';

import { Footer } from './components/Footer';

class App extends Component {
  render() { 
    return (
      <React.Fragment>
        <MainNav />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/oferta" component={Offer} />
              <Route path="/kontakt" component={Contact} />
              <Route path="/zaloguj" component={LogIn} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;