import React, { Component } from 'react';
import { PostModel, UserDetailsModel } from 'types';
import { createPosts } from 'mocks/createPosts';
import Avatar from 'components/domain/User/UserAvatar/Avatar';
import { UserBio } from '../../components/domain/User/UserBio';
import styles from './ProfileDetails.module.css';
import { createUserDetails } from '../../mocks/UserDetailsMocks';
import PostList from '../../components/domain/Post/PostList';

type State = {
  posts: PostModel[];
  userDetails: UserDetailsModel;
};

class ProfileDetails extends Component<{}, State> {
  state: State = {
    posts: [],
    userDetails: createUserDetails(),
  };

  componentDidMount() {
    const generatedPosts = createPosts(1,1);
    this.setState({ posts: generatedPosts });
  }

  render() {
    const { posts, userDetails } = this.state;

    return (
      <>
        <div className={styles.user_details_wrapper}>
          <div className={styles.present_user}>
            <Avatar avatar={userDetails.avatar!} />
            <div className={styles.name}>
              <div>{userDetails.name}</div>
              <div>{userDetails.username}</div>
            </div>
            <UserBio userBio={userDetails.userBio} />
          </div>
        </div>
        <PostList posts={posts} />
      </>
    );
  }
}

export default ProfileDetails;
