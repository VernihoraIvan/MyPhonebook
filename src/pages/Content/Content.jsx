import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import FilterInput from 'components/FilterInput/FilterInput';
import { Header } from 'components/Header/Header';

export const Content = () => {
  return (
    <>
      <Header />
      <ContactForm />
      <FilterInput />
      <Contacts />
    </>
  );
};
