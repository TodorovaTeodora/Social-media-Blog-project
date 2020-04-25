import React, { Component } from 'react';
import classes from './Post.module.css';

type PostTitleProps = {
  title: string;
};

class PostTitle extends Component<PostTitleProps> {
  render() {
    const { title } = this.props;

    return (
      <div className={classes.titleContainer}>
        <div className={classes.postTitle}>{title}</div>
      </div>
    );
  }
}

export default PostTitle;
