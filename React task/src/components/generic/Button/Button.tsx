import React, { Component } from 'react';
import classes from './Button.module.css';

class Button extends Component {
  render() {
    return (
      <div>
        <button type="submit" className={classes.button}>
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;

