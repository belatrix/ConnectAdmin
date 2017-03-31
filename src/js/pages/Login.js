import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Image, Button, Form } from 'semantic-ui-react';
import getAuth from '../actions/authActions';

@connect(state => ({
  data: state.auth,
}))
export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'test',
      password: 'belatrix',
      id: 1,
    };
  }

  componentDidMount() {
    this.usernameInput.addEventListener('username', this.handleNamePaste);
    this.passwordInput.addEventListener('paste', this.handlePasswordPaste);
  }

  componentWillUnmount() {
    this.usernameInput.removeEventListener('username', this.handleNamePaste);
    this.passwordInput.removeEventListener('paste', this.handlePasswordPaste);
  }

  handleName = event => this.setState({ username: event.target.value });
  handlePassword = event => this.setState({ password: event.target.value });
  handleNamePaste = event => this.setState({ username: event.target.value });
  handlePasswordPaste = event => this.setState({ password: event.target.value });

  handleSubmit = (event) => {
    this.props.dispatch(getAuth(this));
    event.preventDefault();
  }

  render() {
    return (
      <Grid divided="vertically">

        <Grid.Row columns={3}>
          <Grid.Column />
          <Grid.Column>
            <br />
            <Image src="./img/logo.webp" size="tiny" centered />
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column />
          <Grid.Column>

            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label htmlFor="username">User Name</label>
                <input
                  placeholder="User Name"
                  name="username"
                  id="firstName"
                  value={this.state.username}
                  onChange={this.handleName}
                  type="text"
                  ref={(input) => { this.usernameInput = input; }}
                />
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">Password</label>
                <input
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                  type="password"
                  ref={(input) => { this.passwordInput = input; }}
                />
              </Form.Field>
              <Button type="submit">Login</Button>
            </Form>

          </Grid.Column>
          <Grid.Column />
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column />
          <Grid.Column />
          <Grid.Column />
        </Grid.Row>

      </Grid>
    );
  }
}
