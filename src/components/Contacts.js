import React, { Component } from 'react';
import Contact from './contacts/Contact';
import {Consumer} from '../context';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

class Contacts extends Component {

  render() {

    return (
      <Consumer>
        { value => {
            const { contacts } = value;
            return (
              <div>
                <Typography variant="subheading" style={{margin:'1em'}}>Contact List</Typography>
                <Grid container spacing={24} style={{padding: 24}}>
                {contacts.map(contact => (
                  <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Contact
                      key={contact.id}
                      contact={contact}
                    />
                  </Grid>
                ))}
                </Grid>
              </div>
            )
        }}
      </Consumer>
    )
  }

}

export default Contacts;
