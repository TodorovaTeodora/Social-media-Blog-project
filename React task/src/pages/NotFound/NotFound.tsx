import React, { Component } from 'react';
import classes from './NotFound.module.css';
import NotFoundImage from './NotFound.jpg';


class NotFound extends Component {
  render() {
    return (
      <div className={classes.container}>
        <h1 className={classes.heading}>Page Not Found</h1>
        <img
          className={classes.image}
          src={NotFoundImage}
          alt="404 Not Found"
        />
      </div>
    );
  }
}

export default NotFound;
