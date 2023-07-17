import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import FilterInput from 'components/FilterInput/FilterInput';

export const Content = () => {
  return (
    <>
      <ContactForm />
      <Contacts />
      <FilterInput />
    </>
  );
};
