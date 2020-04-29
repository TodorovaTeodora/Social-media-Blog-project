import React from 'react';
import { UserBioModel } from 'types';
import styles from './UserBio.module.css';

type BioProps = {
  userBio: UserBioModel;
};

function UserBio({ userBio }: BioProps) {
  if (!userBio) {
    return null;
  }
  return (
    <>
      <div className={styles.birth_details}>
        <div>Country: {userBio.country}</div>
        <div>City: {userBio.city}</div>
        <div>Date of birth: {userBio.dateOfBirth}</div>
      </div>
      <div className={styles.personal_intro}>
        <div className={styles.caption}>{userBio.caption}</div>
        <div className={styles.content}>{userBio.content}</div>
      </div>
    </>
  );
}

export default UserBio;
