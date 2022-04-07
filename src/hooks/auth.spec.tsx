import { renderHook, act } from '@testing-library/react-hooks';
import { mocked } from 'ts-jest/utils';
import { startAsync } from 'expo-auth-session';

import { AuthProvider, useAuth } from './auth';

jest.mock('expo-auth-session');

describe('Auth Hook', () => {
  it('should be able to login with Google account', async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValueOnce({
      type: 'success',
      user: {
        id: 'any_id',
        email: 'lucas@email.com',
        name: 'Lucas',
        photo: 'any_photo.png',
      },
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());
    expect(result.current.user).toBeTruthy();
  });

  it('user should not connect if cancel auth with google', async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValueOnce({
      type: 'cancel',
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).not.toHaveProperty('id');
  });
});
