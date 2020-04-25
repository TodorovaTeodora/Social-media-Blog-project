import React, { Component } from 'react';
import classes from './NavLinks.module.css';

class NavLinks extends Component {
  render() {
    return <div className={classes.container}>{this.props.children}</div>;
  }
}

export default NavLinks;
