import * as Faker from 'faker';
import { MediaModel } from 'types';
import { createTimestamp } from './TimestampMocks';

export const createMediaModel = (): MediaModel => {
  const media: MediaModel = {
    id: Faker.random.number(),
    filePath: Faker.internet.avatar(),
    fileSize: Faker.random.number(),
    mimeType: 'image',
    created_at: createTimestamp().created_at,
    updated_at: createTimestamp().updated_at,
    commentsCount: Faker.random.number(),
    disliked: true,
    liked: true,
    dislikesCount: Faker.random.number(),
    likesCount: Faker.random.number(),
    mediaId: Faker.random.number(),
  };
  return media;
};
