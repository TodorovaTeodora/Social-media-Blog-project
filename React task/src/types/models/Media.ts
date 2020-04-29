import { TimestampsModel } from './Timestamps';
import { Collections } from './Collections';

export type MediaModel = {
  id: number;
  filePath: string;
  fileSize: number;
  mimeType: string;
} & TimestampsModel &
  Collections;
