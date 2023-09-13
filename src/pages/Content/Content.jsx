import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import FilterInput from 'components/FilterInput/FilterInput';
import { Header } from 'components/Header/Header';
import { useAuth } from 'hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Content = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/contacts');
    }
  }, [isLoggedIn, navigate]);
  return (
    <>
      <Header />
      <ContactForm />
      <FilterInput />
      <Contacts />
    </>
  );
};
