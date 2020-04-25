import { TimestampsModel } from './Timestamps';

export type UserBioModel = {
  id: number;
  caption: string;
  content: string;
  dateOfBirth: Date;
  country: string;
  city: string;
} & TimestampsModel;
