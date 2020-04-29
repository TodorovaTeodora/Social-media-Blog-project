import * as Faker from 'faker';
import { UserSummaryModel } from 'types';

export const createUserSummary = (): UserSummaryModel => {
  return {
    id: Faker.random.number(),
    name: Faker.name.firstName(),
    username: Faker.internet.userName(),
    avatarId: Faker.random.number(),
  };
};
