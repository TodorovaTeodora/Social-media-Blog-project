import React from 'react';
import styles from './Avatar.module.css';
import placeholder from './avatar-placeholder.png';

type AvatarProps = {
  avatarId: number;
};

const { REACT_APP_API_URL } = process.env;

function Avatar({ avatarId }: AvatarProps) {
  return (
    <img
      src={avatarId ? `${REACT_APP_API_URL}/media/${avatarId}` : placeholder}
      alt="Avatar"
      className={styles.avatar}
    />
  );
}

export default Avatar;
