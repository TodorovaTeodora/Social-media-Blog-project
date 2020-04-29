import { Me, SuccessResponse } from 'types';
import axios from 'axios';

export type SignInData = {
  username: string;
  password: string;
};

export const signIn = async (data: SignInData): Promise<Me> => {
  const res = await axios.post('/signin', data);
  return res.data;
};

export type SignUpData = {
  name: string;
  username: string;
  password: string;
};

export const signUp = async (data: SignUpData): Promise<Me> => {
  const res = await axios.post('/signup', data);
  return res.data;
};

export const signOut = async (): Promise<SuccessResponse> => {
  const res = await axios.post('/signout');
  return res.data;
};
