import css from './RegisterEl.module.css';

export const RegisterEl = ({ onChange }) => {
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
          // ref={contactNameRef}
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
          // ref={contactNameRef}
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
          // ref={contactNumberRef}
          className={css.input}
          id="password"
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit" className={css.button}>
          Add Contact
        </button>
      </form>
    </>
  );
};
