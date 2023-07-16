import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsAuthError,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isAuthError = useSelector(selectIsAuthError);
  return {
    isLoggedIn,
    user,
    isAuthError,
  };
};

// dianadiana@gmail.com
// 12345678qwerty
