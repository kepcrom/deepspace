import React from 'react';

class EditContact extends React.Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.emailInput = React.createRef();
    this.phoneInput = React.createRef();
  }
  onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value
    }
  }

  static defaultProps = {
    name: 'Fred Smith',
    email: 'fred@yahoo.com',
    phone: '777-777-7777'
  }

  render() {
    const {name, email, phone} = this.props;
    return (
      <div style={{ margin:'10px' }}>
        <h1>Add Contact</h1>
        <form onSubmit={this.onSubmit}>
          <hr />
          <div style={{ margin:'5px' }}>
            <label htmlFor="name">Name
            <input type="text" name="name" defaultValue={name} ref={this.nameInput}/></label>
          </div>
          <div style={{ margin:'5px' }}>
            <label htmlFor="email">Email
            <input type="text" name="email" defaultValue={email} ref={this.emailInput}/></label>
          </div>
          <div style={{ margin:'5px' }}>
            <label htmlFor="phone">Phone
            <input type="text" name="phone" defaultValue={phone} ref={this.phoneInput}/></label>
          </div>
          <input type='submit' />
          <hr />
        </form>
      </div>
    )
  }
}

export default AddContact;
