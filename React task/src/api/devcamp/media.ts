import { MediaModel } from 'types';
import axios from 'axios';

export const getMedia = async (id: Number): Promise<MediaModel> => {
  const res = await axios.get(`/media${id}`);
  return res.data;
};
