import React from 'react';
import { MediaModel } from 'types';
import styles from './Post.module.css';

type PostMediaProps = {
  media: MediaModel;
};

function PostMedia({ media }: PostMediaProps) {
  return (
    media && (
      <div className={styles.postMedia}>
        <img src={media.filePath} alt="media" />
      </div>
    )
  );
}

export default PostMedia;
