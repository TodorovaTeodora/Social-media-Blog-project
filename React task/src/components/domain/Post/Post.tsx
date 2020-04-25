import React, { Component } from 'react';
import { PostModel } from 'types/models/Post';
import classes from './Post.module.css';
import PostTitle from './PostTitle';
import PostContent from './PostContent';

type PostProps = {
  data: PostModel;
};

class Post extends Component<PostProps> {
  render() {
    const { data } = this.props;

    return (
      <div className={classes.postContainer}>
        <PostTitle title={data.title} />
        <PostContent author={data.user} content={data.content} />
      </div>
    );
  }
}

export default Post;
