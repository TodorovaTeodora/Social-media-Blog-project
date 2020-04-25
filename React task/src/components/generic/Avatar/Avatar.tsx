import React, { Component } from 'react';

type AvatarProps = {
  src: string;
};

class Avatar extends Component<AvatarProps> {
  render() {
    return <img src={this.props.src} alt="Avatar" />;
  }
}

export default Avatar;
