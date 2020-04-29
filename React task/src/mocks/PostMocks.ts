import { PostModel } from 'types';
import * as Faker from 'faker';
import { createUserSummary } from './UserSummaryMocks';
import { createTimestamp } from './TimestampMocks';

export const createPosts = (numOfPosts: number): PostModel[] => {
  const Posts: PostModel[] = [];

  for (let i = 1; i <= numOfPosts; i++) {
    Posts.push({
      id: i,
      title: Faker.lorem.sentence(),
      content: Faker.lorem.paragraph(),
      user: createUserSummary(),
      created_at: createTimestamp().created_at,
      updated_at: createTimestamp().updated_at,
      commentsCount: Faker.random.number(),
      disliked: true,
      dislikesCount: Faker.random.number(),
      liked: true,
      likesCount: Faker.random.number(),
      mediaId: Faker.random.number(),
    });
  }

  return Posts;
};
