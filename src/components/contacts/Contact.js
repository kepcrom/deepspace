import React from 'react';
import PropTypes from 'prop-types';
import Face from './Face';

class Contacts extends React.Component {
  constructor(props) {
    super();
  }
  render () {
    const { name, email, phone } = this.props;
    return(
      <div>
        <div className='face'>
          <Face name={name} />
        </div>
        <h1>{name}</h1>
        <ul>
          <li>Email: {email}</li>
          <li>Phone: {phone}</li>
        </ul>
      </div>
    )
  }
}

Contacts.defaultProps = {
  name : 'Unknown',
  email : 'contact@email.com',
  phone : '(123) 123-4567',
}

Contacts.propTypes = {
  name : PropTypes.string.isRequired,
}

export default Contacts
