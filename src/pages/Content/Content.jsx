import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import FilterInput from 'components/FilterInput/FilterInput';
import { Person } from 'components/Person/Person';

export const Content = () => {
  return (
    <>
      <Person />
      <ContactForm />
      <FilterInput />
      <Contacts />
    </>
  );
};
