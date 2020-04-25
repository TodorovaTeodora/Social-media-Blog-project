import Faker from 'faker';

export const createUserSummary = (idSetter: number) => {
  return {
    id: idSetter,
    name: `${Faker.name.firstName()  } ${  Faker.name.lastName()}`, 
    username: Faker.internet.userName()
  };
};
