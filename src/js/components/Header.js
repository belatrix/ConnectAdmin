import React, { Component } from 'react';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      activeItem: 'dashboard',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    return (
      <div>{activeItem}</div>
    );
  }
}
