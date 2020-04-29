/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React, { useState, useCallback, useEffect } from 'react';
import { Container, Row, Spinner, Alert } from 'react-bootstrap';
import { RouteComponentProps } from 'react-router';
import { UserDetailsModel, PostModel } from 'types';
import { useInfiniteScroll } from 'react-infinite-scroll-hook';
import PostList from 'components/domain/Post/PostList';
import UserDetails from 'components/domain/User/UserDetails';
import * as devcamp from '../../api/devcamp';

type Props = RouteComponentProps<{ username: string }>;

function ProfilePage({
  match: {
    params: { username },
  },
}: Props) {
  const [user, setUser] = useState<UserDetailsModel | null>(null);
  const [userLoading, setUserLoading] = useState(false);
  const [userError, setUserError] = useState<string | null>(null);
  const [posts, setPosts] = useState<PostModel[]>([]);
  const [hasMorePosts, setHasMorePosts] = useState(false);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [postsLoading, setPostsLoading] = useState(false);
  const [postsError, setPostsError] = useState<string | null>(null);

  const getUser = useCallback(async (username: string) => {
    try {
      setUserLoading(true);
      setUser(null);
      const user = await devcamp.getUser(username);
      setUser(user);
    } catch (error) {
      setUserError(devcamp.extractError(error));
    } finally {
      setUserLoading(false);
    }
  }, []);

  const loadPosts = useCallback(
    async (offset: number = 0) => {
      if (!user) {
        return;
      }
      try {
        setPostsLoading(true);
        setCurrentOffset(offset);

        const { results, total } = await devcamp.usersPosts(
          user!.id,
          offset,
          5
        );
        const hasMore = offset < total;
        setPosts((currentPosts) =>
          currentPosts!.concat(results as PostModel[])
        );
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
    getUser(username);
  }, [username, getUser]);

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
    hasNextPage: hasMorePosts,
    onLoadMore: loadMorePosts,
  });

  if (!user) {
    return null;
  }

  if (userLoading) {
    return (
      <Row>
        <Spinner animation="border" />
      </Row>
    );
  }
  if (userError) {
    return (
      <Row>
        <Alert variant="danger">{userError}</Alert>
      </Row>
    );
  }

  if (!user) {
    return null;
  }
  return (
    <div ref={infiniteRef}>
      <Container fluid>
        <UserDetails userDetails={user!} />
        <h3>Posts</h3>
        <PostList posts={posts} />
        {postsLoading ? (
          <Row>
            <Spinner animation="border" />
          </Row>
        ) : postsError ? (
          <Alert variant="danger">{postsError}</Alert>
        ) : (
          <div ref={infiniteRef}>
            <PostList posts={posts} />
          </div>
        )}
      </Container>
    </div>
  );
}
export default ProfilePage;
