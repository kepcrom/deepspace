import React from 'react';
import { Consumer } from '../../context';
import uuid from 'uuid';
import axios from 'axios';
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class EditContact extends React.Component {
  state = {
    name :'',
    email : '',
    phone : '',
    errors : {}
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    const res = await axios.get(`http://localhost:8000/api:astronaut/${id}/`);
    this.setState({
      name: res.data.name,
      email: res.data.email,
      phone: res.data.phone
    });
  }

  onChange = (e) => this.setState({ [e.target.name] : e.target.value });
  onSubmit = async (dispatch, e) => {
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
      name,
      email,
      phone
    }

    const { id } = this.props.match.params;

    const res = await axios.put(`http://localhost:8000/api:astronaut/${id}/`,newContact);
    dispatch({ type: 'UPDATE_CONTACT', payload: res.data });

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
            <div>
              <Typography variant="subheading" style={{margin:'1em'}}>Edit Contact</Typography>
              <Card>
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <CardContent>
                    <TextField name="name"  label="Name"  value={name}  onChange={this.onChange} fullWidth='1' required='1' />
                    <TextField name="email" label="Email" value={email} onChange={this.onChange} fullWidth='1' required='1' />
                    <TextField name="phone" label="Phone" value={phone} onChange={this.onChange} fullWidth='1' required='1' />
                    <Toolbar>
                      <Input type="submit" disableUnderline="1" style={{marginLeft:'auto'}}/>
                    </Toolbar>
                  </CardContent>
                </form>
              </Card>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default EditContact;
