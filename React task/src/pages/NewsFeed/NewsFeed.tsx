import React, { Component } from 'react';
import { PostModel } from 'types/models/Post';
// eslint-disable-next-line import/no-unresolved
import { createPosts } from 'mocks/createPosts';
import PostList from 'components/domain/Post/PostList';


type State = {
  posts: PostModel[];
};

class NewsFeed extends Component<{}, State> {
  state: State = {
    posts: [],
  };

  componentDidMount() {
    const generatedPosts = createPosts(1,1);

    this.setState({ posts: generatedPosts });
  }

  render() {
    return <PostList posts={this.state.posts} />;
  }
}

export default NewsFeed;
