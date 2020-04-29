import * as Faker from 'faker';
import { UserBioModel } from 'types';
import { createTimestamp } from './TimestampMocks';

export const createUserBio = (): UserBioModel => {
  const bio: UserBioModel = {
    id: Faker.random.number(),
    caption: Faker.lorem.sentence(),
    content: Faker.lorem.sentences(3),
    dateOfBirth: Faker.date.past(50).toISOString(),
    country: Faker.address.country(),
    city: Faker.address.city(),
    created_at: createTimestamp().created_at,
    updated_at: createTimestamp().updated_at,
  };
  return bio;
};
