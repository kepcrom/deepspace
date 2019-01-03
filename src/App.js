import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contact from './components/contacts/Contact';
import Contacts from './components/Contacts';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import Header from './components/layout/Header';
import notfound from './components/pages/notfound';
import {Provider} from './context';
import './App.css';
//import 'materialize-css/dist/css/materialize.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
      <Provider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className='App'>
            <Header branding="Deep Space Communication"/>
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/add" component={AddContact} />
              <Route exact path="/edit/:id" component={EditContact} />
              <Route component={notfound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
