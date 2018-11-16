import React, { Component } from 'react';
import Contact from './components/contacts/Contact';
import AddContact from './components/contacts/AddContact';
import Header from './components/layout/Header';
import './App.css';
//import 'materialize-css/dist/css/materialize.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return(
      <div className='App'>
        <Header branding="Contact List"/>
        <AddContact />
        <Contact name='Joey Tornado'/>
        <Contact name='Alexander Cumulous'/>
        <Contact name='Heather Stratos'/>
        <Contact name='Alan Ayala'/>
        <Contact name='Sean Boddy'/>
        <Contact name='Gwen Follett'/>
        <Contact name='Kevin Cromwell'/>
      </div>
    )
  }
}

export default App;
