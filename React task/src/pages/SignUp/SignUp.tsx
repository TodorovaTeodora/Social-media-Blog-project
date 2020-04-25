import React, { Component } from 'react';
import { AuthContext } from 'context/AuthContext';
import TextInput from 'components/generic/TextInput';

type State = {
  formValues: { [key: string]: string };
};

class SignUp extends Component<{}, State> {
  state: State = {
    formValues: {
      name: '',
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
        {({ user, error, signup }) => (
          <div>
            <form
              name="signup"
              onSubmit={(e) => {
                e.preventDefault();
                signup(this.state.formValues);
              }}
            >
              <TextInput
                name="name"
                value={this.state.formValues.name}
                onChange={this.handleChange}
              />
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
                autoComplete="new-password"
              />
              <button type="submit">Sign Up</button>
            </form>
          </div>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default SignUp;
