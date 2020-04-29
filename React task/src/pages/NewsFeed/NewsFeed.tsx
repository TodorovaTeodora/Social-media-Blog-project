/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect, useContext, useCallback } from 'react';
import { PostModel } from 'types';
import * as devcamp from 'api/devcamp';
import { AuthContext } from 'contexts/AuthContext';
import Row from 'react-bootstrap/Row';
import { Alert, Spinner } from 'react-bootstrap';
import PostList from 'components/domain/Post/PostList';
import { useInfiniteScroll } from 'hooks';


const NewsFeed = () => {
  const { user } = useContext(AuthContext);

  const [posts, setPosts] = useState<PostModel[]>([]);
  const [postsLoading, setPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState<string | null>(null);
  const [hasMorePosts, setHasMorePosts] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
 

  const loadPosts = useCallback(
    async (offset: number = 0) => {
      if (!user) {
        return;
      }
      try {
        setPostsLoading(true);
        setCurrentOffset(offset);
        const { numberOfPosts, results } = await devcamp.getAllFollowersPosts(
          offset,
          5
        );
        const hasMore = offset < numberOfPosts;
        setPosts((currentPosts) => currentPosts!.concat(results));
        setHasMorePosts(hasMore);
      } catch (error) {
        setPostsError(devcamp.extractError(error));
      } finally {
        setPostsLoading(false);
      }
    },
    [user]
  );

  useEffect(() => {
    if (user) {
      loadPosts(0);
    } else {
      setCurrentOffset(0);
      setHasMorePosts(false);
      setPosts([]);
    }
    // eslint-disable-next-line
  }, [user]);

  const loadMorePosts = () => {
    if (hasMorePosts) {
      loadPosts(currentOffset + 5);
    }
  };

  const infiniteRef = useInfiniteScroll<HTMLDivElement>({
    loading: postsLoading,
    hasMore: hasMorePosts,
    onLoadMore: loadMorePosts,
  });

  if (!user) {
    return null;
  }

  return (
    <div ref={infiniteRef}>
      <div className="justify-content-center">
        {posts.length > 0 ? (
          <>
            <PostList posts={posts!} />
          </>
        ) : (
          <Alert variant="danger" className="text-center">
            No posts.
          </Alert>
        )}

        {postsLoading ? (
          <Row className="justify-content-center">
            <Spinner animation="grow" variant="primary" />
          </Row>
        ) : postsError ? (
          <Alert variant="danger">{postsError}</Alert>
        ) : null}
        <div ref={infiniteRef} />
      </div>
    </div>
  );
};

export default NewsFeed;
