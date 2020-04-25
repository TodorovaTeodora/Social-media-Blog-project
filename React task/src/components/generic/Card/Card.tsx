import React, { Component } from 'react';
import classes from './Card.module.css';
import Button from '../Button';

class Card extends Component {
  render() {
    return (
      <div className={classes.card}>
        <div className={classes.cardHeader}>
          <h3 className={classes.cardTitle}>Profile</h3>
        </div>
        <div className={classes.cardContent}>
          <p className={classes.cardParagraph}>{this.props.children}</p>
        </div>
        <div className={classes.cardFooter}>
          <Button>Follow</Button>
        </div>
      </div>
    );
  }
}

export default Card;
