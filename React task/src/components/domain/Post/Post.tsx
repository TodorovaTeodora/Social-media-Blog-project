/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from 'react';
import { PostModel } from 'types/models/Post';
import { Button } from 'react-bootstrap';
import * as devcamp from 'api/devcamp';
import styles from './Post.module.css';
import UserSummary from '../User/UserSummary/UserSummary';
import PostContent from './PostContent';
import PostTitle from './PostTitle';

type PostProps = {
  data: PostModel;
};

function Post({ data }: PostProps) {
  const [liked, setLiked] = useState(data.liked);
  const [disliked, setDisliked] = useState(data.disliked);

  const handleLike = () => {
    devcamp.likePost(data.id);
    console.log('like');
    setLiked(true);
    setDisliked(false);
  };

  const handleDislike = () => {
    devcamp.dislikePost(data.id);
    setDisliked(true);
    setLiked(false);
  };

  return (
    <div className={styles.postContainer}>
      <div className={styles.post_essence}>
        <div className={styles.post_top}>
          <UserSummary user={data.user} />
          <div className={styles.dates}>
            <div>
              {data.title && (
              <PostTitle title={data.title} />
              )}
            </div>

            <div className={styles.dates_component}>
              <p><h6>Created: </h6> {data.created_at!.substring(0, 10)}</p>
            </div>
            <div className={styles.dates_component}>
              <p><h6>Last updated: </h6> {data.updated_at!.substring(0, 10)}</p>
            </div>
          </div>
        </div>
        <PostContent content={data.content} />
      </div>
      <div className={styles.buttons_wrapper}>
        <Button
          className={styles.button}
          variant={liked ?  'primary' : 'light'}
          onClick={handleLike}
        >
          <h6>{data.likesCount} likes</h6>
        </Button>
        <Button
          className={styles.button}
          variant={disliked ? 'danger' : 'light'}
          onClick={handleDislike}
        >
          <h6>{data.dislikesCount} dislikes</h6>
        </Button>
      </div>
    </div>
  );
}

export default Post;
