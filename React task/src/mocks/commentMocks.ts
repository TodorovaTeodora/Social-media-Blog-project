
import { makeid } from 'utils';
import { CommentModel } from 'types/models/Comment';
import { createUserSummary } from './createUserSummary';


export const createComments = (numberOfComments: number) => {
  const comments: CommentModel[] = [];

  for (let i = 1; i <= numberOfComments; i++) {
    comments.push({
      id: 1,
      content: makeid(10),
      user: createUserSummary(1),
    });
  }

  return comments;
};
