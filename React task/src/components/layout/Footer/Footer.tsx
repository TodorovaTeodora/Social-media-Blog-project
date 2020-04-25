import React, { Component } from 'react';
import classes from './Footer.module.css';

class Footer extends Component {
  render() {
    return <footer className={classes.footer}>{this.props.children}</footer>;
    
  }
}
export default Footer;