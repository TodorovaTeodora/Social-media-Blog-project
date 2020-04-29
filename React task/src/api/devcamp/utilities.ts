import { AxiosError } from 'axios';

export const extractError = (error: AxiosError) => {
  return error?.message;
};
