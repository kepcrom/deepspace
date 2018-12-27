import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './components/contacts/Contact';
import Contacts from './components/Contacts';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';
import notfound from './components/pages/notfound';
import {Provider} from './context';
import './App.css';
//import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
      <Provider>
        <Router>
          <div className='App'>
            <Header branding="Contact List"/>
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/add" component={AddContact} />
              <Route component={notfound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
