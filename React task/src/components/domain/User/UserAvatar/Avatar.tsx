import React, { Component } from 'react';
import { MediaModel } from 'types';
import styles from './Avatar.module.css';

type AvatarProp = {
  avatar: MediaModel;
};

class Avatar extends Component<AvatarProp> {
  render() {
    const { avatar } = this.props;

    return (
      <div className={styles.avatar_wrapper}>
        <img src={avatar.filePath} alt="" className={styles.avatar} />
      </div>
    );
  }
}

export default Avatar;
