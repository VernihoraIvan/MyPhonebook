// import { Outlet, useNavigate } from 'react-router-dom';
// import { Suspense, useEffect } from 'react';
// import css from './Layout.module.css';
// // import { Container } from '@mui/material';
// // import AppBar from '@mui/material/AppBar';
// // import AppBarMenu from 'components/appBar/AppBarMenu';
// import { Header } from 'components/Header/Header';
// import { useAuth } from 'hooks';

// const Layout = () => {
//   const navigate = useNavigate();
//   const { isLoggedIn, isRefreshing } = useAuth();

//   //   useEffect(() => {
//   //     if (isLoggedIn) {
//   //       navigate('/contacts');
//   //     }
//   //   }, [isLoggedIn, navigate]);
//   if (!isLoggedIn) {
//     return <Outlet />;
//   }

//   return (
//     <div className={css.menu}>
//       <Header />
//       {/* <AppBar color="secondary" position="static">
//         <Container maxWidth="m">
//           <AppBarMenu />
//         </Container>
//       </AppBar> */}
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//     </div>
//   );
// };

// export default Layout;
