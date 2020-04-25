import { PostModel } from 'types';
import Faker from 'faker';
import { createComments } from './commentMocks';
import { createUserSummary } from './createUserSummary';


export const createPosts = (numberOfPosts: number, usersPostId: number) => {
  const posts: PostModel[] = [];

  for (let i = 1; i <= numberOfPosts; ++i){
    posts.push({
      id: i,
      title: Faker.lorem.words(),
      content: Faker.lorem.lines(15),
      comments: createComments(2),
      user: createUserSummary(1),

    });
  }
  return posts;
};

