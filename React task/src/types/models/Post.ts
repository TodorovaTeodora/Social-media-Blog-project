import { CommentModel } from './Comment';
import { MediaModel } from './Media';
import { UserSummaryModel } from './UserSummary';
import { TimestampsModel } from './Timestamps';

export type PostModel = {
  id: number;
  title: string;
  content: string;
  comments: CommentModel[];
  media?: MediaModel;
  user: UserSummaryModel;
} & TimestampsModel;

