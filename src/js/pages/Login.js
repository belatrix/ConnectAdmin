import React, { Component } from 'react'
import { Grid, Image, Button, Checkbox, Form } from 'semantic-ui-react'

import { getAuth } from "../actions/authActions"

import { connect } from "react-redux";

@connect((store) => {
  return {
    data: store.auth
  }
})

export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'test',
      password: 'belatrix'
    }
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleName(event) {
    this.setState({
      username: event.target.value
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.dispatch(getAuth(this))
    event.preventDefault();
  }

  render () {

    return (
      <Grid divided='vertically'>

        <Grid.Row columns={3}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
            <br />
            <Image src='./img/logo.webp'  size='tiny' centered />
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>

            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <label>User Name</label>
                <input
                  placeholder='User Name'
                  name="username"
                  value={this.state.username}
                  onChange={this.handleName}
                  type="text"
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  placeholder='Password'
                  name='password'
                  value={this.state.password}
                  onChange={this.handlePassword}
                  type='password'
                />
              </Form.Field>
              <Button type='submit'>Login</Button>
            </Form>

          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3}>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>

      </Grid>
    )
  }
}
