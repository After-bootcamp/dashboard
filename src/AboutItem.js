import React, { Component } from 'react';

class AboutItem extends Component {
  render() {
    const aboutLinks = this.props.data.map(item => {
      return (
        <navLinkItem key={ item.name }>
          <h2>{ item.name }</h2>
          <a href={item.LinkedIn}>LinkedIn</a><br></br>
          <a href={item.Github}>Github</a>
        </navLinkItem>
      )
    })
    return (
      <li>
        { aboutLinks }
      </li>
    )
  }
}

export default AboutItem;
