import { UserSummaryModel } from './UserSummary';
import { MediaModel } from './Media';
import { TimestampsModel } from './Timestamps';
import { Collections } from './Collections';

export type CommentModel = {
  id: number;
  content: string;
  user: UserSummaryModel;
  media?: MediaModel;
} & TimestampsModel &
  Collections;
