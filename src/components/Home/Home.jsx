import { LoginPage } from 'pages/Login/LoginPage';
import { RegisterPage } from 'pages/Register/RegisterPage';
import { useState } from 'react';

export const Home = () => {
  const [pageType, setPageType] = useState('');
  if (pageType === 'login') {
    return <LoginPage setPageType={setPageType} />;
  }
  if (pageType === 'register') {
    return <RegisterPage setPageType={setPageType} />;
  }
  return (
    <>
      <button onClick={() => setPageType('login')}>Log in</button>
      <button onClick={() => setPageType('register')}>Register</button>
    </>
  );
};
