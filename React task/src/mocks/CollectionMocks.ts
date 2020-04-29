import * as Faker from 'faker';
import  { Collections }  from 'types/models/Collections';

export const createCollection = (): Collections => {
  const collection = {
    commentsCount: Faker.random.number(),
    likesCount: Faker.random.number(),
    dislikesCount: Faker.random.number(),
    liked: true,
    disliked: true,
    mediaId: Faker.random.number(),
  };
  return collection;
};
