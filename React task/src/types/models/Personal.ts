import { UserSummaryModel } from './UserSummary';
import { UserBioModel } from './UserBio';
import { TimestampsModel } from './Timestamps';

export type Personal = UserSummaryModel & {
  followersCount: number;
  followingCount: number;
  userBio: UserBioModel;
  roles: string[];
} & TimestampsModel;
