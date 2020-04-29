import React, { useState, useCallback } from 'react';
import { UserDetailsModel } from 'types';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import * as devcamp from 'api/devcamp';
import Avatar from '../UserAvatar/Avatar';
import { UserBio } from '../UserBio';
import styles from './UserDetails.module.css';

type Props = {
  userDetails: UserDetailsModel;
};

function UserDetails({ userDetails }: Props) {
  const [followed, setFollow] = useState(false);
  const [unfollowed, setUnfollow] = useState(true);
  const [numberOfFollowers, setFollowers] = useState(0);
  const [numberOfFollowing, setFollowing] = useState(0);

  const loadFollowers = useCallback(async () => {
    try {
      const followersCount = await devcamp.getUserFollowers(userDetails.id);
      setFollowers(followersCount.numberOfFollowsers);
    } catch (error) {
      devcamp.extractError(error);
    }
  }, [userDetails.id]);

  const loadFollowing = useCallback(async () => {
    try {
      const followingCount = await devcamp.getUserFollowing(userDetails.id);
      setFollowing(followingCount.numberOfFollowsers);
    } catch (error) {
      devcamp.extractError(error);
    }
  }, [userDetails.id]);

  const handleFollow = () => {
    devcamp.followUser(userDetails.id);
    setFollow(true);
    setUnfollow(false);
    loadFollowers();
  };

  const handleUnfollow = () => {
    devcamp.unfollowUser(userDetails.id);
    setFollow(false);
    setUnfollow(true);
  };

  return (
    <>
      <div>
        <div className={styles.main_wrapper}>
          <div className={styles.main_user_info}>
            <div className={styles.present}>
              <Avatar avatarId={userDetails.avatarId} />
              <Link to={`/${userDetails.username}`}>
                {userDetails.username}
              </Link>
              {userDetails.name}
            </div>
          </div>
          <div className={styles.social}>
            <Button
              className={styles.button_follow}
              variant="dark"
              onClick={handleFollow}
            >
              <h3>Follow</h3>
            </Button>
            <Button
              className={styles.button_unfollow}
              variant="dark"
              onClick={handleUnfollow}
            >
              <h3>Unfollow</h3>
            </Button>
            <div className={styles.subscribe}>
              <div className={styles.subscribe_component}>
                <h5>Followers</h5>
                <h2>{userDetails.followersCount}</h2>
              </div>
              <div className={styles.subscribe_component}>
                <h5>Following</h5>
                <h2>{userDetails.followingCount}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bio}>
          <UserBio userBio={userDetails.userBio} />
        </div>
      </div>
    </>
  );
}

export default UserDetails;
