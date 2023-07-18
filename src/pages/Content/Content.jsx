import ContactForm from 'components/ContactForm/ContactForm';
import Contacts from 'components/Contacts/Contacts';
import FilterInput from 'components/FilterInput/FilterInput';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

export const Content = () => {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(logOut());
  };
  return (
    <>
      <button onClick={logOutHandler}>Log Out</button>
      <ContactForm />
      <FilterInput />
      <Contacts />
    </>
  );
};
