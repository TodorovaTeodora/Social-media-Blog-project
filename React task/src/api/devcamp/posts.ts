import axios from 'axios';
import { PostModel, CommentModel } from 'types';


type FollowersPosts = {
  numberOfPosts: number;
  results: PostModel[];
};


export const getAllFollowersPosts = async (
  offset: number = 0,
  limit: number = 0
): Promise<FollowersPosts> => {
  const res = await axios.get('/posts', { params: { offset, limit } });
  return res.data;
};


export const createPost = async (): Promise<boolean> => {
  const res = await axios.post('/posts');
  return res.data;
};


export const getPostById = async (id: number): Promise<PostModel> => {
  const res = await axios.get(`/posts/${id})`);
  return res.data;
};


export const editProject = async (id: number): Promise<PostModel> => {
  const res = await axios.patch(`/posts/${id})`);
  return res.data;
};


export const deleteProject = async (id: number): Promise<PostModel> => {
  const res = await axios.delete(`/posts/${id})`);
  return res.data;
};


export const postComments = async (
  id: number,
  offset: number = 0,
  limit: number = 10
): Promise<CommentModel> => {
  const res = await axios.get(`posts/${id}/comments`, {
    params: { offset, limit },
  });
  return res.data;
};


export const likePost = async (identifier: number): Promise<boolean> => {
  const res = await axios.post(`/posts/${identifier}/like`);
  return res.data;
};


export const dislikePost = async (identifier: number): Promise<boolean> => {
  const res = await axios.post(`/posts/${identifier}/dislike`);
  return res.data;
};
