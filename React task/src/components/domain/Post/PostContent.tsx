import React, { Component } from 'react';
import { UserSummaryModel } from 'types/models/UserSummary';
import Avatar from 'components/generic/Avatar';
import classes from './Post.module.css';


type PostContentProps = {
  author: UserSummaryModel;
  content: string;
};

class PostContent extends Component<PostContentProps> {
  render() {
    const { author, content } = this.props;

    return (
      <div className={classes.postContent}>
        <div className={classes.userInformation}>
          <Avatar src="https://i679.photobucket.com/albums/vv151/elmayuga/AMM%20Comm%20Website/AMMCommSquareLogo-LinkedIn-60x60.jpg" />
          {author.name}
        </div>
        <div className={classes.contentContainer}>{content}</div>
      </div>
    );
  }
}

export default PostContent;
