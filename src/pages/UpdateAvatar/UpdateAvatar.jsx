import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { update } from 'redux/auth/thunk';

const UpdateAvatar = () => {
  const [file, setFile] = useState(null);

  const handleChange = event => {
    setFile(event.target.files[0]);
  };

  const dispatch = useDispatch();

  const changeAvatar = () => {
    dispatch(update(file));
  };
  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={changeAvatar} type="button">
        Upload
      </button>
    </div>
  );
};

export default UpdateAvatar;
