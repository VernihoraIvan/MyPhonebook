import { Button, CssBaseline, Grid } from '@mui/material';
import css from './Home.module.css';
import { useNavigate } from 'react-router-dom';
export const Home = () => {
  const navigate = useNavigate();
  const handleRegisterNavigate = () => {
    navigate('/register');
  };
  const handleLoginNavigate = () => {
    navigate('/login');
  };

  return (
    <div className={css.container}>
      <h1 className={css.header}>Create your own Phonebook</h1>
      <div className={css.buttons}>
        <Button variant="contained" onClick={handleLoginNavigate}>
          Log in
        </Button>
        <Button variant="contained" onClick={handleRegisterNavigate}>
          Register
        </Button>
      </div>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={12}
          sx={{
            backgroundImage:
              'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: t =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[800],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </div>
  );
};
