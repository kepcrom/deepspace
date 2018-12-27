import React from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';

class AddContact extends React.Component {
  state = {
    name :'',
    email : '',
    phone : '',
    errors : {}
  };

  onChange = (e) => this.setState({ [e.target.name] : e.target.value });
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const { name, email, phone } = this.state;

    if( name === '' )
    {
      this.setState({ errors: { name: 'Name is Required' }});
      return;
    }
    if( email === '' )
    {
      this.setState({ errors: { email: 'Email is Required' }});
      return;
    }
    if( phone === '' )
    {
      this.setState({ errors: { phone: 'Phone is Required' }});
      return;
    }

    const newContact = {
      id : uuid(),
      name,
      email,
      phone
    }

    dispatch({ type: 'ADD_CONTACT', payload: newContact });
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  }

  render() {
    const {name, email, phone} = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div style={{ margin:'10px' }}>
              <h1>Add Contact</h1>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <hr />
                <div style={{ margin:'5px' }}>
                  <label htmlFor="name">Name
                  <input type="text" name="name" value={name} onChange={this.onChange} /></label>
                </div>
                <div style={{ margin:'5px' }}>
                  <label htmlFor="email">Email
                  <input type="text" name="email" value={email} onChange={this.onChange} /></label>
                </div>
                <div style={{ margin:'5px' }}>
                  <label htmlFor="phone">Phone
                  <input type="text" name="phone" value={phone} onChange={this.onChange} /></label>
                </div>
                <input type='submit' />
                <hr />
              </form>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;
