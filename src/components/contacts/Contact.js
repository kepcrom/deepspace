import React from 'react';
import PropTypes from 'prop-types';
import Face from './Face';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';

import { Link } from 'react-router-dom';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { id, name, email, phone } = this.props.contact;
    return(
      <div className='astronaut'>
        <Card>
          <CardHeader title={name} />

          <CardContent>
            <Grid container spacing={10} style={{padding: 10}}>
              <Grid item xs={4} sm={4} lg={4} xl={4}>
                <Link to={`/edit/${id}`}><Face name={name} /></Link>
              </Grid>
              <Grid item xs={8} sm={8} lg={8} xl={8}>
                <ul>
                  <li>Email: {email}</li>
                  <li>Phone: {phone}</li>
                </ul>
              </Grid>
            </Grid>

          </CardContent>
        </Card>
      </div>
    )
  }
}

Contacts.defaultProps = {
  username : 'Unknown',
  email : 'contact@email.com',
  phone : '(123) 123-4567',
}

Contacts.propTypes = {
  name : PropTypes.string.isRequired,
}

export default Contacts
