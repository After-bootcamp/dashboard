import React, { Component } from 'react';

class NavItem extends Component {

  render() {

    const navLinks = this.props.data.map(item => {
      return (

          <navLinkItem key={ item.title }><a href={ item.href }>{ item.title }<br/></a> </navLinkItem>
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