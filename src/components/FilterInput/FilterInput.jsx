import css from './FilterInput.module.css';
import { useDispatch } from 'react-redux';
import { useRef } from 'react';
import { filterContact } from '../../redux/filter/slice';

const FilterInput = () => {
  const inputRef = useRef();

  const dispatch = useDispatch();

  const handleOnChange = () => {
    const input = inputRef.current.value;
    dispatch(filterContact(input));
  };
  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        ref={inputRef}
        className={css.input}
        type="text"
        onChange={handleOnChange}
        placeholder="search..."
      />
    </label>
  );
};

export default FilterInput;
