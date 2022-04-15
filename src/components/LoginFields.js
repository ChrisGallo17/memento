import { Button, Box, Avatar, Typography, TextField, Grid, Link, CssBaseline } from "@mui/material"
import { LockOutlined } from "@mui/icons-material";
import { Form, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

export default function LoginFields ({ login, setEmail, setPassword, user }) {
  let navigate = useNavigate();
  const theme = createTheme();

  const onSubmit = (event) => {
    event.preventDefault();
    login()
    navigate("../feed")
  };
  
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(event) => { setEmail(event.target.value) }}
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
              onChange={(event) => { setPassword(event.target.value) }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs justifyContent="flex-start">
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Link href="../register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
      <h4>{user?.email}</h4>
    </ThemeProvider>
  )
}