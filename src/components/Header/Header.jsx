import { UserMenu } from 'components/UserMenu/UserMenu';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <UserMenu />
    </header>
  );
};
