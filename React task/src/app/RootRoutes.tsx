import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { AuthContext } from 'contexts/AuthContext';
import { ProfileDetails, NewsFeed, SignUp, SignIn } from '../pages';

function RootRouts() {
  return (
    <AuthContext.Consumer>
      {({ user }) =>
        user ? (
          <Switch>
            <Route exact path="/feed" component={NewsFeed} />
            <Route exact path="/user" component={ProfileDetails} />
            <Route exact path="/users/:username" component={ProfileDetails} />
            <Redirect path="/signin" to="/" />
            <Redirect path="/signup" to="/" />
            <Redirect exact path="/" to="/feed" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Redirect path="/" to="/signin" />
          </Switch>
        )
      }
    </AuthContext.Consumer>
  );
}

export default RootRouts;
