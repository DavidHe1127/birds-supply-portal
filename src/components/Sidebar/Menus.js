import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';

const menus = [
  {
    name: 'products',
    label: 'Products',
    icon: 'product hunt'
  },
  {
    name: 'events',
    label: 'Events',
    icon: 'calendar'
  },
  {
    name: 'requests',
    label: 'New Requests',
    icon: 'newspaper'
  }
];

class Menus extends Component {

  onClick = (e, data) => this.props.history.push(data.name)

  render() {
    const { path, history } = this.props;

    return menus.map((x, i) => (
      <Menu.Item
        name={x.name}
        active={path.includes(x.name)}
        onClick={this.onClick}
        key={i}
      >
        <Icon name={x.icon} />
        {x.label}
      </Menu.Item>
    ));
  }
}

export default withRouter(Menus);
