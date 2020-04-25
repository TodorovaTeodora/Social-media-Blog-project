import React, { Component } from 'react';
import { UserSummaryModel } from '../../../../types';
import styles from './UserSumary.module.css';

type UserProps = {
  user: UserSummaryModel;
};

class UserSummary extends Component<UserProps> {
  render() {
    const { user } = this.props;

    return (
      <div className={styles.info_wrapper}>
        <div className={styles.avatar_wrapper}>
          <img src={user.avatar?.filePath} alt="avatar" />
        </div>
        <div className={styles.username}>{user.username}</div>
      </div>
    );
  }
}

export default UserSummary;
