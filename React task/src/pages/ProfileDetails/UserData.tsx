/* eslint-disable max-len */
import React, { Component, ReactNode } from 'react';
import Avatar from 'components/generic/Avatar';
import classes from './ProfileDetails.module.css';
import { UserDetailsModel } from '../../types/models/UserDetails';


type UserDataProps = {
  userDetails: UserDetailsModel;
};

class UserData extends Component<UserDataProps> {
  static avatar: string | undefined;
  static username: ReactNode;
  render() {
    return <div className={classes.data}>
      <div className={classes.main}> 
        <Avatar src="https://via.placeholder.com/100" />
        <h1 className={classes.name}>{this.props.userDetails.name}</h1>
        <div>
          <h2 className={classes.caption}>{this.props.userDetails.userBio.caption}</h2>
          <h3 className={classes.followers}>Followers: {this.props.userDetails.followersCount}</h3>
          <h3 className={classes.following}>Following: {this.props.userDetails.followingCount}</h3>
        </div>
      </div>

      <h3 className={classes.from}>From: {this.props.userDetails.userBio.city}, {this.props.userDetails.userBio.country}</h3>
    </div>;
  }
}

export default UserData;