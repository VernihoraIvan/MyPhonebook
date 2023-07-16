import { useAuth } from 'hooks';
import css from './LoginEl.module.css';

export const LoginEl = ({
  onChange,
  handleLogIn,
  loginEmailRef,
  loginPasswordRef,
}) => {
  const { isAuthError } = useAuth();

  return (
    <>
      <button type="button" onClick={() => onChange('registration')}>
        Registration
      </button>
      <form onSubmit={handleLogIn}>
        <label className={css.label} htmlFor="email">
          Email:
        </label>
        <input
          ref={loginEmailRef}
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
          ref={loginPasswordRef}
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
