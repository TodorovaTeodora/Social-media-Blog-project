import { PostModel, CommentModel, MediaModel } from 'types';

export type Results = {
  total: number;
  results: PostModel[] | CommentModel[] | MediaModel[];
};
