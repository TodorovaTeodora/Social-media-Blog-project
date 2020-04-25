import { UserSummaryModel } from './UserSummary';
import { MediaModel } from './Media';
import { TimestampsModel } from './Timestamps';

export type CommentModel = {
  id: number;
  content: string;
  user: UserSummaryModel;
  media?: MediaModel;
} & TimestampsModel;


