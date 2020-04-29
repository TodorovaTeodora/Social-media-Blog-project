import React from 'react';
import UsersSearch from 'components/domain/UsersSearch';
import { AuthContext } from 'contexts/AuthContext';
import Navigation from '../Navigation/Navigation';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.Header}>
      <AuthContext.Consumer>
        {({ user }) => (user ? <UsersSearch /> : null)}
      </AuthContext.Consumer>
      <Navigation />
    </header>
  );
}

export default Header;
