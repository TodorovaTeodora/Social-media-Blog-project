import React from 'react';
import Image from 'react-bootstrap/Image';
import classes from './Thumbnail.module.css';
import placeholder from './person-placeholder.jpg';

type AvatarProps = {
  mediaId: number | null;
  small?: boolean;
};

const { REACT_APP_API_URL } = process.env;

function Thumbnail({ mediaId, small }: AvatarProps) {
  return (
    <Image
      src={mediaId ? `${REACT_APP_API_URL}/media/${mediaId}` : placeholder}
      alt="Avatar"
      thumbnail
      className={small ? classes.smallThumbnail : classes.thumbnail}
    />
  );
}
export default Thumbnail;
