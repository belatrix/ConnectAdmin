import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Menu, Segment } from 'semantic-ui-react';
import ColumnList from '../components/ColumnList';
import fetchEmployeesList from '../actions/employeeAction';

@connect(state => ({
  employee: state.employee,
}))
export default class Notification extends Component {

  state = { activeItem: 'Employee' };

  componentWillMount() {
    this.props.dispatch(fetchEmployeesList());
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;
    const { list } = this.props.employee;

    return (
      <div class="child-container">
        <h1>Send a Notification to:</h1>

        <Menu attached="top" tabular>
          <Menu.Item name="Employee" active={activeItem === 'Employee'} onClick={this.handleItemClick} />
          <Menu.Item name="Location" active={activeItem === 'Location'} onClick={this.handleItemClick} />
          <Menu.Item name="Event" active={activeItem === 'Event'} onClick={this.handleItemClick} />
          <Menu.Item name="Everybody" active={activeItem === 'Everybody'} onClick={this.handleItemClick} />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input
                transparent
                icon={{ name: 'search', link: true }}
                placeholder="Search users..."
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment attached="bottom">
          <ColumnList data={list} />
        </Segment>
      </div>
    );
  }
}
