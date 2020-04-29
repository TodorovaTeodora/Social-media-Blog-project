import React from 'react';
import { PostModel } from '../../../types/models/Post';
import Post from './Post';
import styles from './Post.module.css';

type PostListProps = {
  posts: PostModel[];
};

function PostList({ posts }: PostListProps) {
  return (
    <div className={styles.postListContainer}>
      {posts.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </div>
  );
}

export default PostList;
