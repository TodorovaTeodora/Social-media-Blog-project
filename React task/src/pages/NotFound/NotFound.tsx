import React, { Component } from 'react';
import styles from './NotFound.module.css';

class NotFound extends Component {
  render() {
    return <p className={styles.not_found}>404 Not Found</p>;
  }
}

export default NotFound;
