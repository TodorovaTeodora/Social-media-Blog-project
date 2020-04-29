import { useEffect, useRef } from 'react';
import useConstant from './useConstant';

interface IOptions {
  
  onLoadMore: () => void;
  
  loading: boolean;
  
  hasMore: boolean;
  
  root?: Element | null;
  
  rootMargin?: string;
}

function useInfiniteScroll<T extends Element>({
  onLoadMore,
  loading,
  hasMore,
  root = null,
  rootMargin = '100px',
}: IOptions) {
  const boundaryRef = useRef<T>(null);
  const onLoadMoreRef = useRef(onLoadMore);
  onLoadMoreRef.current = onLoadMore;

  const intObserver = useConstant(
    () =>
      new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              onLoadMoreRef.current();
            }
          });
        },
        { root, rootMargin }
      )
  );

  useEffect(() => {
    if (boundaryRef.current && !loading && hasMore) {
      intObserver.observe(boundaryRef.current);
    }

    return () => intObserver.disconnect();
  }, [intObserver, loading, hasMore]);

  return boundaryRef;
}

export default useInfiniteScroll;
