import { useRef, useState } from 'react';
// import css from './AuthPage.module.css';
import { LoginEl } from 'components/LoginEl/LoginEl';
import { RegisterEl } from 'components/RegisterEl/RegisterEl';
import { useDispatch } from 'react-redux';
import { logIn, register } from 'redux/auth/thunk';

export const AuthPage = () => {
  const [pageType, setPageType] = useState('login');
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const registerEmailRef = useRef();
  const registerPasswordRef = useRef();
  const registerNameRef = useRef();

  const dispatch = useDispatch();

  const handleRegister = event => {
    event.preventDefault();
    const email = registerEmailRef.current.value;
    const password = registerPasswordRef.current.value;
    const name = registerNameRef.current.value; 
    dispatch(register({ email, password, name }));
  };
  const handleLogIn = event => {
    event.preventDefault();
    const email = loginEmailRef.current.value;
    const password = loginPasswordRef.current.value; 
    dispatch(logIn({ email, password }));
  };

  //   if (pageType === 'login') {
  //     return (
  //       <LoginEl
  //         onChange={setPageType}
  //         handleLogIn={handleLogIn}
  //         loginEmailRef={loginEmailRef}
  //         loginPasswordRef={loginPasswordRef}
  //       />
  //     );
  //   } else {
  //     return (
  //       <RegisterEl
  //         onChange={setPageType}
  //         handleRegister={handleRegister}
  //         registerEmailRef={registerEmailRef}
  //         registerPasswordRef={registerPasswordRef}
  //         registerNameRef={registerNameRef}
  //       />
  //     );
  //   }
};
