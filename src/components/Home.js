import { Button, Box, Typography, CssBaseline, Stack } from "@mui/material"
import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";

export default function Home () {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Memento
          </Typography>
          <Typography variant="h5" align="center" color="text.secondary" paragraph>
            A place to store your ideas, quotes, and other fundamental concepts you 
            can implement into your daily life.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained" href="feed">Go to feed</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  )
}