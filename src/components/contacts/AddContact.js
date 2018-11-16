import React from 'react';

class AddContact extends React.Component {
  state = {
    name :'',
    email: '',
    phone: '',
  };

  onChange = (e) => this.setState({ [e.target.name] : e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const {name, email, phone} = this.state;
    return (
      <div style={{ margin:'10px' }}>
        <h1>Add Contact</h1>
        <form onSubmit={this.onSubmit}>
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
  }
}

export default AddContact;
