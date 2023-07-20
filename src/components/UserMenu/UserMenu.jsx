import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };

  const { user } = useAuth();
  return (
    <div className={css.container}>
      <p>{user.email}</p>
      <button
        className={css.button}
        variant="contained"
        onClick={logOutHandler}
      >
        Log Out
      </button>
    </div>
  );
};
