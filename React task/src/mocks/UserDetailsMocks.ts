import * as Faker from 'faker';
import { UserDetailsModel } from 'types/models';
import { createUserBio } from './UserBioMocks';

export const createUserDetails = (): UserDetailsModel => {
  const bio: UserDetailsModel = {
    id: Faker.random.number(),
    followersCount: Faker.random.number(),
    followingCount: Faker.random.number(),
    name: `${Faker.name.firstName()} ${Faker.name.lastName()}`,
    username: Faker.internet.userName(),
    avatarId: Faker.random.number(),
    userBio: createUserBio(),
  };
  return bio;
};
