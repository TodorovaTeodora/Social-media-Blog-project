import * as Faker from 'faker';
import { TimestampsModel } from 'types/models/Timestamps';

export const createTimestamp = (): TimestampsModel => {
  const timestamp: TimestampsModel = {
    created_at: Faker.date.past(1),
    updated_at: Faker.date.past(0.5),
  };
  return timestamp;
};
