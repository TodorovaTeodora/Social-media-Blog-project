import React from 'react';
import { Link } from 'react-router-dom';
import { UserSummaryModel } from '../../../../types';
import styles from './UserSumary.module.css';
import Avatar from '../UserAvatar/Avatar';

type UserProps = {
  user: UserSummaryModel;
};

function UserSummary({ user }: UserProps) {
  return (
    <div className={styles.info_wrapper}>
      <div className={styles.avatar_wrapper}>
        <Avatar avatarId={user.avatarId} />
      </div>
      <Link to={`/users/${user.username}`} className={styles.link}>
        <div className={styles.username}>{user.username}</div>
      </Link>
    </div>
  );
}

export default UserSummary;
