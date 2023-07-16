import { useAuth } from 'hooks';
import css from './RegisterEl.module.css';

export const RegisterEl = ({
  onChange,
  handleRegister,
  registerEmailRef,
  registerPasswordRef,
  registerNameRef,
}) => {
  const { isAuthError } = useAuth();
  return (
    <>
      <button type="button" onClick={() => onChange('login')}>
        Login
      </button>
      <form>
        <label className={css.label} htmlFor="name">
          Name:
        </label>
        <input
          ref={registerNameRef}
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
          ref={registerEmailRef}
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
          ref={registerPasswordRef}
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
