import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { getContactsList } from '../../redux/contacts/selectors';
import { useDispatch } from 'react-redux';

import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { addContact } from 'redux/contacts/operations';

const ContactForm = () => {
  const items = useSelector(getContactsList);
  const dispatch = useDispatch();

  const contactNameRef = useRef();
  const contactNumberRef = useRef();

  const saveContactHandler = event => {
    event.preventDefault();
    const contactName = contactNameRef.current.value;
    const contactNumber = Number(contactNumberRef.current.value);
    const isExistingContact = items?.find(
      contact => contact.name.toLowerCase() === contactName.toLowerCase()
    );
    if (isExistingContact) {
      alert(`Person already in contacts`);
      return;
    }
    if (!contactName) {
      alert('Please write a name');
    }
    if (!contactNumber) {
      alert(`Please write a number`);
      return;
    }
    if (typeof contactNumber !== 'number') {
      alert(`Please write a number`);
      return;
    }
    dispatch(
      addContact({ name: contactName, number: contactNumber, id: nanoid() })
    );
    contactNameRef.current.value = '';
    contactNumberRef.current.value = '';
  };

  return (
    <form onSubmit={saveContactHandler}>
      <label className={css.label} htmlFor="name">
        Name:
      </label>
      <input
        ref={contactNameRef}
        className={css.input}
        id="name"
        type="text"
        name="name"
        placeholder="name"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label className={css.label} htmlFor="tel">
        Number:
      </label>
      <input
        ref={contactNumberRef}
        className={css.input}
        id="tel"
        type="tel"
        name="number"
        placeholder="number"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" className={css.button} onClick={saveContactHandler}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
