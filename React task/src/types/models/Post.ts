import { UserSummaryModel } from './UserSummary';
import { TimestampsModel } from './Timestamps';
import { Collections } from './Collections';

export type PostModel = {
  id: number;
  title: string;
  content: string;
  user: UserSummaryModel;
} & TimestampsModel &
  Collections;
