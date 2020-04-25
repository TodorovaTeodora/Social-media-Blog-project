import React, { Component } from 'react';
import { AuthContext } from 'context/AuthContext';
import TextInput from 'components/generic/TextInput';

type State = {
  formValues: { [key: string]: string };
};

class SignIn extends Component<{}, State> {
  state: State = {
    formValues: {
      username: '',
      password: '',
    },
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    this.setState((previousState) => ({
      formValues: {
        ...previousState.formValues,
        [event.target.name]: event.target.value,
      },
    }));
  };

  render() {
    return (
      <AuthContext.Consumer>
        {({ user, error, signin }) => (
          <div>
            <form
              name="signin"
              onSubmit={(e) => {
                e.preventDefault();
                signin(this.state.formValues);
              }}
            >
              <TextInput
                name="username"
                value={this.state.formValues.username}
                onChange={this.handleChange}
              />
              <TextInput
                name="password"
                type="password"
                value={this.state.formValues.password}
                onChange={this.handleChange}
                autoComplete="current-password"
              />
              <button type="submit">Sign In</button>
            </form>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default SignIn;
