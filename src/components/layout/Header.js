import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { Link } from 'react-router-dom';



const Header = (props) => {
  return (
    <div>
      <AppBar position="static" color="default">
          <Toolbar>
              <Typography variant="title" color="inherit">
              {props.branding}
              </Typography>
              <Typography style={{ marginLeft: 'auto'}} color="inherit">
                <Button  color="inherit" href="/">Home</Button>
                <Button  color="inherit" href="/add">Add Contact</Button>
              </Typography>
          </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
