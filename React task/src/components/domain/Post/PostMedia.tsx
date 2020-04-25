import React, { Component } from 'react';
import { MediaModel } from 'types';
import styles from './Post.module.css';

type PostMediaProps = {
  media: MediaModel;
};

class PostMedia extends Component<PostMediaProps> {
  render() {
    const med = this.props.media!;

    return (
      med && (
        <div className={styles.postMedia}>
          <img src={med.filePath} alt="media" />
        </div>
      )
    );
  }
}

export default PostMedia;
