import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useAuth } from 'hooks';
import css from './RegisterPage.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = ({ setPageType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { isAuthError } = useAuth();
  const dispatch = useDispatch();
  const handleRegister = () => {
    dispatch(register({ email, password, name }));
  };

  const navigate = useNavigate();
  // const handleLoginNavigate = () => {
  //   navigate('/login');
  // };
  const handleChange = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setEmail(data.get('email'));
    setPassword(data.get('password'));
    setName(data.get('name'));
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ email, password }));
    navigate('/contacts');
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };
  const defaultTheme = createTheme();
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                'url(https://source.unsplash.com/random?wallpapers)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: t =>
                t.palette.mode === 'light'
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                onChange={handleChange}
                // onSubmit={handleLogIn}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="name"
                  label="name"
                  type="name"
                  id="name"
                  autoComplete="current-name"
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  // onSubmit={handleLogIn}
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign up
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/goit-react-hw-08-phonebook/login"
                      variant="body2"
                    >
                      {'If you have an account, Log in.'}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        // {...props}
      >
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      {/* <button type="button" onClick={handleLoginNavigate}>
        Login
      </button>
      <form>
        <label className={css.label} htmlFor="name">
          Name:
        </label>
        <input
          //   ref={registerNameRef}
          onChange={event => setName(event.target.value)}
          value={name}
          className={css.input}
          id="name"
          type="text"
          name="name"
          placeholder="name"
          required
        />
        <label className={css.label} htmlFor="email">
          Email:
        </label>
        <input
          //   ref={registerEmailRef}
          onChange={event => setEmail(event.target.value)}
          value={email}
          className={css.input}
          id="email"
          type="email"
          name="email"
          placeholder="email"
          required
        />
        <label className={css.label} htmlFor="password">
          Password:
        </label>
        <input
          //   ref={registerPasswordRef}
          onChange={event => setPassword(event.target.value)}
          value={password}
          className={css.input}
          id="password"
          type="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit" className={css.button} onClick={handleRegister}>
          Register
        </button>
      </form>
      {isAuthError && <div>Error occurred while register</div>} <br /> */}
    </>
  );
};
