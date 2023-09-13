import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { getContactsList, getFilter } from '../../redux/contacts/selectors';
import { deleteContact, fetchContacts } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Button } from '@mui/material';

const Contacts = () => {
  const items = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContactsList = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContactsList?.map(({ _id, name, number }) => (
        <li key={_id} className={css.list_item}>
          {name}: {number}{' '}
          <Button
            variant="contained"
            type="button"
            onClick={() => onDelete(_id)}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
