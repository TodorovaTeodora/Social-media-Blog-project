import React, { Component } from 'react';
import { PostModel } from 'types/models/Post';
import Post from './Post';
import classes from './Post.module.css';


type PostListProps = {
  posts: PostModel[];
};

class PostList extends Component<PostListProps> {
  render() {
    return (
      <div className={classes.postListContainer}>
        {this.props.posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
