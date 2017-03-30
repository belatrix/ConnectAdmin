import React, { Component } from 'react';
import { Sidebar, Segment, Menu, Icon, Image, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';


@connect(state => ({
  user: state.user,
}))
class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibleLeft: false,
      activeItem: 'Dashboard',
      avatarJpg: '..//../img/avatar.png',
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  toggleVisibilityLeft = () => this.setState({ visibleLeft: !this.state.visibleLeft });

  render() {
    const { visibleLeft, activeItem } = this.state;
    const { user } = this.props.user;
    const { location } = user;
    const { icon } = location || '';
    return (
      <div>
        <Segment color="orange" inverted>
          <Menu color="orange" secondary inverted>
            <Menu.Item name="" icon="content" onClick={this.toggleVisibilityLeft} />
            <div class="item">
              <h3>Belatrix Connect</h3>
            </div>
          </Menu>
        </Segment>

        <Sidebar.Pushable as={Segment}>
          <Sidebar color="blue" as={Menu} animation="scale down" width="thin" visible={visibleLeft} icon="labeled" vertical inverted className="sidebar-custom">
            <div className="login-text">
              <Card className="login-table">
                <Image id="imgAvatar" src={icon} shape="rounded" size="mini" className="login-avatar" />
                <Card.Content className="login-card">
                  <Card.Header className="login-text">
                    {user.first_name} {user.last_name}
                  </Card.Header>
                  <Card.Meta className="login-small-text">
                    {user.email}
                  </Card.Meta>
                </Card.Content>
              </Card>


            </div>
            <Menu.Item href="#/" name="Dashboard" active={activeItem === 'Dashboard'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft}>
              <Icon name="dashboard" />
              Dashboard
            </Menu.Item>
            <Menu.Item href="#/notification" name="Notification" active={activeItem === 'Notification'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft} >
              <Icon name="alarm" />
            Notification
            </Menu.Item>
            <Menu.Item href="#/ranking" name="Ranking" active={activeItem === 'Ranking'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft}>
              <Icon name="ordered list" />
              Ranking
            </Menu.Item>
            <Menu.Item href="#/ranking" name="Badges" active={activeItem === 'Badges'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft}>
              <Icon name="bookmark" />
              Badges
            </Menu.Item>
            <Menu.Item href="#/" name="Recomendations" active={activeItem === 'Recomendations'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft}>
              <Icon name="certificate" />
              Recomendations
            </Menu.Item>
            <Menu.Item href="#/" name="Events" active={activeItem === 'Events'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft}>
              <Icon name="calendar" />
              Events
            </Menu.Item>
            <Menu.Item href="#/" name="Locations" active={activeItem === 'Locations'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft}>
              <Icon name="flag" />
              Locations
            </Menu.Item>
            <Menu.Item href="#/" name="Employees" active={activeItem === 'Employees'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft}>
              <Icon name="user" />
              Employees
            </Menu.Item>
            <Menu.Item href="#/" name="Categories" active={activeItem === 'Categories'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft}>
              <Icon name="unordered list" />
              Categories
            </Menu.Item>
            <Menu.Item href="#/" name="Tags" active={activeItem === 'Tags'} onClick={this.handleItemClick} onMouseUp={this.toggleVisibilityLeft}>
              <Icon name="tags" />
              Tags
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <div class="main-container">
              { this.props.children }
            </div>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Layout;
