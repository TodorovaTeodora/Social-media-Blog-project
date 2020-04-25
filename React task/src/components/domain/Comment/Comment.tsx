import React, { Component } from 'react';
import { CommentModel } from 'types';
import styles from './Comment.module.css';
import UserSummary from './../User/UserSummary/UserSummary';

type CommentProps = {
  commentProp: CommentModel;
};

class Comment extends Component<CommentProps> {
  render() {
    return (
      <div className={styles.comment_wrapper}>
        <UserSummary user={this.props.commentProp.user} />
        <p className={styles.commentContent}>
          {this.props.commentProp.content}
        </p>
      </div>
    );
  }
}

export default Comment;
