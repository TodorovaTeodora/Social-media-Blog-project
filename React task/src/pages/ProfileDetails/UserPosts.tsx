import React, { Component } from 'react';
import { UserSummaryModel, PostModel } from 'types';
import { createPosts } from 'mocks/createPosts';
import PostList from 'components/domain/Post/PostList';


type UserPostsProps = {
  user: UserSummaryModel
};

type State = {
  posts: PostModel[];
};

class UserPosts extends Component<UserPostsProps, State> {

  state: State = {
    posts: createPosts(1, 2),
  };

  render() {
    return <div>
      <PostList posts={this.state.posts.filter((post) => this.props.user.id === post.user.id)} />
    </div>;

  }
}

export default UserPosts;
