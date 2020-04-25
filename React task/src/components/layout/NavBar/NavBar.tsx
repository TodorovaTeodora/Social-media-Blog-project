import React, { Component } from 'react';
import classes from './NavBar.module.css';

class Navbar extends Component {
  render(){
    return (
      <header className={classes.header}>
        <nav className={classes.nav}>{this.props.children}</nav>
      </header>
    );
  }
}
export default Navbar;
