import React from 'react';
import styles from './Post.module.css';

type PostTitleProps = {
  title: string;
};

function PostTitle({ title }: PostTitleProps) {
  return (
    <div className={styles.titleContainer}>
      <div>{title}</div>
    </div>
  );
}

export default PostTitle;
