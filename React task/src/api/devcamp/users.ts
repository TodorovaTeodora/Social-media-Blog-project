/* eslint-disable max-len */
import { Me, UserSummaryModel, UserDetailsModel } from 'types';
import axios from 'axios';
import { Results } from 'types/models/Results';


export const getUsers = async (search: string): Promise<UserSummaryModel[]> => {
  const res = await axios.get('/users', { params: { search } });
  return res.data;
};


export const getMe = async (): Promise<Me> => {
  const res = await axios.get('/users/me');
  return res.data;
};


export const editMe = async (): Promise<Me> => {
  const res = await axios.patch('/users/me');
  return res.data;
};


export const getUser = async (
  identifier: number | string
): Promise<UserDetailsModel> => {
  const res = await axios.get(`/users/${identifier}`);
  return res.data;
};


export const followUser = async (identifier: number): Promise<boolean> => {
  const res = await axios.post(`/users/${identifier}/follow`);
  return res.data;
};


export const unfollowUser = async (identifier: number): Promise<boolean> => {
  const res = await axios.post(`/users/${identifier}/unfollow`);
  return res.data;
};


type UserFollowers = {
  numberOfFollowsers: number;
  results: UserSummaryModel[];
};


export const getUserFollowers = async (id: number): Promise<UserFollowers> => {
  const res = await axios.get(`/users/${id}/followers`);
  return res.data;
};


export const usersPosts = async (
  id: number,
  offset: number = 0,
  limit: number = 10
): Promise<Results> => {
  const res = await axios.get(`users/${id}/posts`, {
    params: { offset, limit },
  });
  return res.data;
};


export const getUserFollowing = async (id: number): Promise<UserFollowers> => {
  const res = await axios.get(`/users/${id}/following`);
  return res.data;
};
