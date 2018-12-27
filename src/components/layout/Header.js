import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div class='navbar navbar'>
      <div class='navbar navbar-brand'>{props.branding}
          <div style={{ float: 'right' }}>
            <Link class='nav-item' to="/">Home</Link>
            <Link class='nav-item' to="/add">Add Contact</Link>
          </div>
      </div>
    </div>
  )
}

export default Header;
