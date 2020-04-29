import React from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from 'contexts/AuthContext';
import Button from '../../generic/Button/Button';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <AuthContext.Consumer>
      {({ user, signOut }) =>
        user ? (
          <div className={styles.nav_wrapper}>
            <NavLink
              to={`/users/${user.username}`}
              className={styles.button_another}
            >
              <Button>Profile</Button>
            </NavLink>

            <NavLink to="/signin" onClick={signOut} className={styles.button}>
              <Button>Log out</Button>
            </NavLink>
          </div>
        ) : (
          <div className={styles.nav_wrapper}>
            <NavLink to="/signin">
              <Button>Sign in</Button>
            </NavLink>

            <NavLink to="/signup">
              <Button>Sign up</Button>
            </NavLink>
          </div>
        )}
    </AuthContext.Consumer>
  );
}

export default Navigation;
