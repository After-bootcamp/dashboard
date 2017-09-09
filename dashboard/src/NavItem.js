import React, { Component } from 'react';
import NavBar from './NavBar';

class NavItem extends Component {

  render() {

    const navLinks = this.props.data.map(item => {
      return (

          <li><a href={item.href}>{item.title}</a></li>
        )
    })

  return (
    <ul>
      {navLinks}
    </ul>
  );
  }
}

export default NavItem;