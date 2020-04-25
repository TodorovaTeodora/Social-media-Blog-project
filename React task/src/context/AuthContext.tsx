import React, { Component } from 'react';
import { Personal } from 'types';
import NotFound from './../pages/NotFound/NotFound';

type AuthContextValue = {
  user: Personal | null;
  error: NotFound | null;
  signup: (data: { [key: string]: string }) => Promise<Personal>;
  signin: (data: { [key: string]: string }) => Promise<Personal>;
  signout: () => Promise<unknown>;
  getMe: () => Promise<Personal>;
};

const AuthContext = React.createContext({} as AuthContextValue);

type State = AuthContextValue;

const { REACT_APP_API_URL } = process.env;

export class AuthContextProvider extends Component<{}, State> {
  componentDidMount() {
    this.getMe();
  }

  signup = (data: { [key: string]: string }): Promise<Personal> => {
    return fetch(`${REACT_APP_API_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.statusCode >= 400) {
          this.setState({ error: resData.error });
        } else {
          this.setState({ user: resData });
        }

        return resData;
      });
  };

  signin = (data: { [key: string]: string }): Promise<Personal> => {
    return fetch(`${REACT_APP_API_URL}/signin`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.statusCode >= 400) {
          this.setState({ error: resData.error });
        } else {
          this.setState({ user: resData });
        }

        return resData;
      });
  };

  signout = (): Promise<unknown> => {
    return fetch(`${REACT_APP_API_URL}/signout`, {
      method: 'POST',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.statusCode >= 400) {
          this.setState({ error: resData.error });
        } else if (resData.success) {
          this.setState({ user: null });
        }

        return resData;
      });
  };

  getMe = (): Promise<Personal> => {
    return fetch(`${REACT_APP_API_URL}/users/myprofile`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((resData) => {
        if (resData.statusCode >= 400) {
          this.setState({ error: resData.error });
        } else {
          this.setState({ user: resData });
        }

        return resData;
      });
  };

  state: State = {
    user: null,
    error: null,
    signup: this.signup,
    signin: this.signin,
    signout: this.signout,
    getMe: this.getMe,
  };

  render() {
    if (!this.state.user && !this.state.error) {
      return null;
    }

    return (
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export { AuthContext };
