import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Section from './Section/Section';
import FilterInput from './FilterInput/FilterInput';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useAuth } from 'hooks/useAuth';
import { AuthPage } from 'pages/AuthPage/AuthPage';
// import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export const App = () => {
  const { isLoggedIn, user } = useAuth();
  console.log({ isLoggedIn, user });
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  if (isLoggedIn) {
    return (
      <div className={css.container}>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <FilterInput />
          <Contacts />
        </Section>
      </div>
    );
  } else {
    return <AuthPage />;
  }
  // return (
  //   <div className={css.container}>
  //     <Section title="Phonebook">
  //       <ContactForm />
  //     </Section>
  //     <Section title="Contacts">
  //       <FilterInput />
  //       <Contacts />
  //     </Section>
  //   </div>
  // );
};
