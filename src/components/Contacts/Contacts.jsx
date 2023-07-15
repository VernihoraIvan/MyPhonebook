import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import { getContactsList, getFilter } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';

const Contacts = () => {
  const items = useSelector(getContactsList);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onDelete = id => {
    dispatch(deleteContact(id));
  };

  const filteredContactsList = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContactsList?.map(({ id, name, number }) => (
        <li key={id} className={css.list_item}>
          {name}: {number}{' '}
          <button
            className={css.button}
            type="button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
