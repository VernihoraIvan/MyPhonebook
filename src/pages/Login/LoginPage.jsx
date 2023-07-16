import { useAuth } from 'hooks';
import { useState } from 'react';
import css from './LoginPage.module.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginPage = ({ setPageType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isAuthError } = useAuth();
  const dispatch = useDispatch();
  console.log({ email, password });
  const handleLogIn = event => {
    event.preventDefault();
    dispatch(logIn({ email, password }));
  };

  return (
    <>
      <button type="button" onClick={() => setPageType('register')}>
        Registration
      </button>
      <form onSubmit={handleLogIn}>
        <label className={css.label} htmlFor="email">
          Email:
        </label>
        <input
          //   ref={loginEmailRef}
          onChange={event => setEmail(event.target.value)}
          value={email}
          className={css.input}
          id="email"
          type="email"
          name="email"
          placeholder="Enter Your email"
          required
        />
        <label className={css.label} htmlFor="password">
          Password:
        </label>
        <input
          //   ref={loginPasswordRef}
          onChange={event => setPassword(event.target.value)}
          value={password}
          className={css.input}
          id="password"
          type="password"
          name="password"
          placeholder="Enter Your password"
          required
        />
        <button type="submit" className={css.button}>
          Log in
        </button>
      </form>
      {isAuthError && <div>Error occurred while logging in</div>} <br />
    </>
  );
};
