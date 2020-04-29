import React from 'react';
import Image from 'react-bootstrap/Image';
import pholder from './pholder.jpg';
import classes from './Avatar.module.css';

type AvatarProps = {
  src: number | string | undefined;
  width: string | number | undefined;
  height: string | number | undefined;
};

const { REACT_APP_API_URL } = process.env;

const Avatar = ({ src, width, height }: AvatarProps) => {
  const avatarContainer = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div style={avatarContainer} className={classes.avatar}>
      <Image
        src={
          // eslint-disable-next-line no-nested-ternary
          src
            ? typeof src === 'string'
              ? src
              : `${REACT_APP_API_URL}/media/${src}`
            : pholder
        }
        className="w-100 h-100"
        roundedCircle
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
