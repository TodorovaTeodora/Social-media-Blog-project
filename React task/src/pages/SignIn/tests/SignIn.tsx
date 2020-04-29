
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import { AuthContext, AuthContextProvider } from 'contexts/AuthContext';

jest.mock('api/devcamp', () => ({
  getMe: jest.fn().mockResolvedValue(null),
  signIn: jest.fn().mockImplementation(() =>
    Promise.resolve({
      id: 1,
      username: 'username',
      name: 'firstname lastname',
    })
  ),
}));

describe('Sign In page', () => {
  it('renders without crashing', () => {
    render(
      <Router history={createMemoryHistory()} />
    );
  });

  it('renders without crashing', async () => {
    const history = createMemoryHistory();

    const { rerender } = render(
      <AuthContextProvider>
        <Router history={history} />
        <AuthContext.Consumer>{({ user }) => user?.name}</AuthContext.Consumer>
      </AuthContextProvider>
    );

    expect(screen.queryAllByText('firstname lastname')).toHaveLength(0);

    const usernameInput = await screen.findByLabelText('Username');
    fireEvent.change(usernameInput, {
      target: { value: 'testuser' },
    });

    const passwordInput = await screen.findByLabelText('Password');
    fireEvent.change(passwordInput, {
      target: { value: 'testpassword' },
    });

    fireEvent.click(screen.getByText('Submit'));

    rerender(
      <AuthContextProvider>
        <Router history={history} />
        <AuthContext.Consumer>{({ user }) => user?.name}</AuthContext.Consumer>
      </AuthContextProvider>
    );

    await screen.findAllByText('firstname lastname', {}, { timeout: 100 });
  });
});
