// import authSelectors from '../redux/auth/auth-selectors';
import { useAuth } from 'hooks/index';

// import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();
  // const user = useSelector(authSelectors.getUser);

  console.log(user);
  const { name, email, avatarUrl } = user;
  return (
    <div>
      <p>Name: {name} </p>
      <p>Email: {email} </p>
      <img
        src={
          avatarUrl.includes('gravatar')
            ? avatarUrl
            : `http://localhost:8000/${avatarUrl}`
        }
        alt={name}
      />

      <Link to="update">Update avatar</Link>
    </div>
  );
};

export default ProfilePage;
