import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import FilterInput from './FilterInput/FilterInput';
import { fetchContacts } from 'redux/contacts/operations';
import { useAuth } from 'hooks/index';
// import { AuthPage } from 'pages/AuthPage/AuthPage';
import { Home } from './Home/Home';
import css from './App.module.css';
import { LoginPage } from 'pages/Login/LoginPage';
import { RegisterPage } from 'pages/Register/RegisterPage';
import NotFound from 'pages/NotFound/NotFound';
import ProtectedRoute from 'routes/ProtectedRoute';
import { Content } from 'pages/Content/Content';
import { refreshing } from 'redux/auth/operations';
import { Loader } from './Loader/Loader';

export const App = () => {
  const { isLoggedIn, user, isRefreshing } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }
  return (
    <Routes>
      <Route path="/" element={<Home />} index />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/contacts"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Content />
          </ProtectedRoute>
        }
      />
    </Routes>
  );

  // if (isLoggedIn) {
  //   return (
  //     <div className={css.container}>
  //       <Section title="Phonebook">
  //         <ContactForm />
  //       </Section>
  //       <Section title="Contacts">
  //         <FilterInput />
  //         <Contacts />
  //       </Section>
  //     </div>
  //   );
  // } else {
  //   return <Home />;
  // }
};
