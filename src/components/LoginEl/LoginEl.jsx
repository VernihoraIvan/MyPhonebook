import css from './LoginEl.module.css';

export const LoginEl = ({ onChange }) => {
  return (
    <>
      <button type="button" onClick={() => onChange('registration')}>
        Registration
      </button>
      <form>
        <label className={css.label} htmlFor="email">
          Email:
        </label>
        <input
          // ref={contactNameRef}
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
          // ref={contactNumberRef}
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
    </>
  );
};
