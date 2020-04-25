import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { NewsFeed, ProfileDetails, SignIn, SignUp } from 'pages';
import NotFound from 'pages/NotFound';
import { AuthContext } from 'context/AuthContext';


class RootRoutes extends Component {
  render() {
    return (
      <Switch>
      <AuthContext.Consumer>
        {({ user }) =>
          user ? (
            <>
              <Route exact path="/" component={NewsFeed} />
              <Route
                exact
                path="/users"
                component={ProfileDetails}
              />
              <Redirect path="/signup" to="/" />
            </>
          ) : (
            <>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={SignIn} />
              <Redirect to="/login" />
            </>
          )}
      </AuthContext.Consumer>

      <Route path="/" component={NotFound} />
    </Switch>
  );
}
}



export default RootRoutes;
