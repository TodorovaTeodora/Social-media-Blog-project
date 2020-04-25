import React, { Component } from 'react';
import * as Faker from 'faker';
import { CommentModel } from 'types';
import Comment from '../Comment';

type PostCommentsProps = {
  comments: CommentModel[];
};

class PostComments extends Component<PostCommentsProps> {
  render() {
    return (
      <div>
        {this.props.comments.map((comment) => (
          <Comment key={Faker.random.number()} commentProp={comment} />
        ))}
      </div>
    );
  }
}

export default PostComments;
