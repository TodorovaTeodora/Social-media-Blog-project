import React, { Component } from 'react';
import classes from './MainContent.module.css';

class MainContent extends Component {
  componentDidMount() {
    console.log(this);
  }

  render(){
    return (
      <main className={classes.main}>
        <div className={classes.content}>{this.props.children}</div>
      </main>
    );
  }
}
export default MainContent;