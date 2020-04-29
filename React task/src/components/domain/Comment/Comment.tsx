import React from 'react';
import { CommentModel } from 'types';
import UserSummary from '../User/UserSummary/UserSummary';
import styles from './Comment.module.css';

type CommentProps = {
  commentProp: CommentModel;
};

function Comment({ commentProp }: CommentProps) {
  return (
    <div className={styles.comment_wrapper}>
      <UserSummary user={commentProp.user} />
      <p className={styles.commentContent}>{commentProp.content}</p>
    </div>
  );
}

export default Comment;
