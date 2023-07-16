import { useAuth } from 'hooks';
import css from './RegisterPage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterPage = ({ setPageType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { isAuthError } = useAuth();
  const dispatch = useDispatch();
  const handleRegister = () => {
    dispatch(register({ email, password, name }));
  };
  return (
    <>
      <button type="button" onClick={() => setPageType('login')}>
        Login
      </button>
      <form>
        <label className={css.label} htmlFor="name">
          Name:
        </label>
        <input
          //   ref={registerNameRef}
          onChange={event => setName(event.target.value)}
          value={name}
          className={css.input}
          id="name"
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <label className={css.label} htmlFor="email">
          Email:
        </label>
        <input
          //   ref={registerEmailRef}
          onChange={event => setEmail(event.target.value)}
          value={email}
          className={css.input}
          id="email"
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <label className={css.label} htmlFor="password">
          Password:
        </label>
        <input
          //   ref={registerPasswordRef}
          onChange={event => setPassword(event.target.value)}
          value={password}
          className={css.input}
          id="password"
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit" className={css.button} onClick={handleRegister}>
          Register
        </button>
      </form>
      {isAuthError && <div>Error occurred while register</div>} <br />
    </>
  );
};
