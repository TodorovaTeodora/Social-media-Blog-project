/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { Me } from 'types';
import * as devcamp from 'api/devcamp';


type AuthContextValue = {
  user: Me | null;
  error: string | null;
  checked: boolean;
  loading: boolean;
  signUp: (data: {
    name: string;
    username: string;
    password: string;
  }) => Promise<void>;
  signIn: (data: { username: string; password: string }) => Promise<void>;
  signOut: () => Promise<void>;
  getMe: () => Promise<void>;
};

const AuthContext = React.createContext({} as AuthContextValue);

type State = AuthContextValue;

export class AuthContextProvider extends Component<{}, State> {
  componentDidMount() {
    this.getMe().finally(() => {
      this.setState({ checked: true, error: null });
    });
  }

  signIn = async (data: devcamp.SignInData) => {
    try {
      this.setState({ loading: true });
      const me = await devcamp.signIn(data);
      this.setState({ user: me });
    } catch (error) {
      this.setState({ error: devcamp.extractError(error) });
    } finally {
      this.setState({ loading: false });
    }
  };

  signUp = async (data: devcamp.SignUpData) => {
    try {
      this.setState({ loading: true });
      const me = await devcamp.signUp(data);
      this.setState({ user: me });
    } catch (error) {
      this.setState({ error: devcamp.extractError(error) });
    } finally {
      this.setState({ loading: false });
    }
  };

  signOut = async () => {
    try {
      this.setState({ loading: true });
      await devcamp.signOut();
      this.setState({ user: null });
    } catch (error) {
      this.setState({ error: devcamp.extractError(error) });
    } finally {
      this.setState({ loading: false });
    }
  };

  getMe = async () => {
    try {
      this.setState({ loading: true });
      const me = await devcamp.getMe();
      this.setState({ user: me });
    } catch (error) {
      this.setState({ error: devcamp.extractError(error) });
    } finally {
      this.setState({ loading: false });
    }
  };

  state: State = {
    user: null,
    error: null,
    checked: false,
    loading: false,
    signUp: this.signUp,
    signIn: this.signIn,
    signOut: this.signOut,
    getMe: this.getMe,
  };

  render() {
    if (!this.state.checked) {
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

