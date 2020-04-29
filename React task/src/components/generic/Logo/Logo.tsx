import React from 'react';
import { Link } from 'react-router-dom';
import logo from './Img/logo.png';

function Logo() {
  return (
    <Link to="/">
      <img width="60px" height="60px" src={logo} alt="Logo" />
    </Link>
  );
}

export default Logo;
