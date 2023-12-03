import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAuth } from 'hooks/index';
import { Home } from './Home/Home';
import { LoginPage } from 'pages/Login/LoginPage';
import { RegisterPage } from 'pages/Register/RegisterPage';
import NotFound from 'pages/NotFound/NotFound';
import ProtectedRoute from 'routes/ProtectedRoute';
import { Content } from 'pages/Content/Content';
import { refreshing } from 'redux/auth/thunk';
import { Loader } from './Loader/Loader';
import ProfilePage from 'pages/ProfilePage/ProfilePage';
import { Header } from './Header/Header';
import UpdateAvatar from 'pages/UpdateAvatar/UpdateAvatar';
// import Layout from './Layout/Layout';

export const App = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate('/contacts');
  //   }
  // }, [isLoggedIn, navigate]);

  useEffect(() => {
    dispatch(refreshing());
  }, [dispatch]);

  if (isRefreshing) {
    return <Loader />;
  }
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}
      <Route index element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
      <Route
        path="/contacts"
        element={
          <ProtectedRoute isRefreshing={isRefreshing} isLoggedIn={isLoggedIn}>
            <Content />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute isRefreshing={isRefreshing} isLoggedIn={isLoggedIn}>
            <Header />
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route path="/profile/update" element={<UpdateAvatar />} />
      {/* </Route> */}
    </Routes>
  );
};
