import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const Person = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };

  const { user } = useAuth();
  return (
    <div>
      <p>{user.email}</p>
      <button onClick={logOutHandler}>Log Out</button>
    </div>
  );
};
