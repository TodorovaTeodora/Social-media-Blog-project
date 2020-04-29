import React from 'react';
import * as Faker from 'faker';
import { CommentModel } from 'types';
import Comment from '../Comment';

type PostCommentsProps = {
  comments: CommentModel[];
};

function PostComments({ comments }: PostCommentsProps) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment key={Faker.random.number()} commentProp={comment} />
      ))}
    </div>
  );
}

export default PostComments;
