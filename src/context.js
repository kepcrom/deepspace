import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    case 'UPDATE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.map( contact => contact.id === action.payload.id ? (contact = action.payload) : contact )
      }
    default:
      return state;
  }
}

export class Provider extends Component {
  state = {
    contacts: [],
    dispatch: action => {
      this.setState(state => reducer(state, action))
    }
  };

  componentDidMount() {
    axios.get('http://localhost:8000/api:astronaut/').then(res => this.setState({ contacts: res.data }));
    console.log(this.state);
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer;
