import { MediaModel } from './Media';

export type UserSummaryModel = {
  id: number;
  name: string;
  username: string;
  avatar?: MediaModel;
};
