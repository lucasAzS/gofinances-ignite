import { renderHook, act } from '@testing-library/react-hooks';
import { AuthProvider, useAuth } from './auth';

jest.mock('expo-auth-session', () => {
  return {
    startAsync: () => {
      return {
        type: 'success',
        user: {
          id: 'any email',
          email: 'lucas@email.com',
          name: 'Lucas',
          photo: 'any_photo.png',
        },
      };
    },
  };
});

describe('Auth Hook', () => {
  it('should be able to login with Google account', async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());
    expect(result.current.user).toBeTruthy();
  });
});
