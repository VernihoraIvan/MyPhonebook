import { useState } from 'react';
import css from './AuthPage.module.css';
import { LoginEl } from 'components/LoginEl/LoginEl';
import { RegisterEl } from 'components/RegisterEl/RegisterEl';

export const AuthPage = () => {
  const [pageType, setPageType] = useState('login');
  if (pageType === 'login') {
    return <LoginEl onChange={setPageType} />;
  } else {
    return <RegisterEl onChange={setPageType} />;
  }
};
