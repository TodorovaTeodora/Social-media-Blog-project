import { UserBioModel } from 'types';
import Faker from 'faker';
import { makeid } from '../utils';

export const createUserBIO = (): UserBioModel => {
  return {
    id: Math.ceil(Math.random() * 1000),
    caption: 'Fan',
    content: makeid(20),
    dateOfBirth: Faker.date.past(),
    country: Faker.address.country(),
    city: Faker.address.city()
  };
};
