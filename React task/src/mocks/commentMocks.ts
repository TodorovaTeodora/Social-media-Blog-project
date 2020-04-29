import { CommentModel } from 'types';
import * as Faker from 'faker';
import { createUserSummary } from './UserSummaryMocks';

export const createComments = (numOfComments: number): Array<CommentModel> => {
  const comments: CommentModel[] = [];

  for (let i = 1; i <= numOfComments; i++) {
    comments.push({
      id: Faker.random.number(),
      content: Faker.lorem.sentences(),
      user: createUserSummary(),
      commentsCount: Faker.random.number(),
      disliked: true,
      dislikesCount: Faker.random.number(),
      liked: true,
      likesCount: Faker.random.number(),
      mediaId: Faker.random.number(),
    });
  }

  return comments;
};
