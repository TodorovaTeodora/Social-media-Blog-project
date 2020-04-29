import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { signIn } from '../auth';

// eslint-disable-next-line
const mockAxios = new MockAdapter(axios);

describe('api/devcamp/auth', () => {
  it('makes the correct request', async () => {
    mockAxios.onPost('/signin').reply(200, { id: 1 });
    const result = await signIn({ username: 'abc', password: 'bca' });
    expect(result).toEqual({ id: 1 });
  });
});
