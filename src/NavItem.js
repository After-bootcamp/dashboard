import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavItem extends Component {

  render() {

    const navLinks = this.props.data.map(item => {
      return (
          <Link to={item.href}>{ item.title }<br/> </Link>
        )
    })

  return (
    <li>
        { navLinks }
    </li>
  );
  }
}

export default NavItem;
