/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import styles from './Post.module.css';

type PostContentProps = {
  content: string;

};

function PostContent({ content }: PostContentProps) {
  return (
    <>
      <div className={styles.content_container}>
        <div className={styles.text_content}>{content}</div>
      </div>
    </>
  );
}

export default PostContent;
