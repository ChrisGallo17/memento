import { Container, TextField } from "@mui/material"

export default function Register ({ setEmail, setPassword, user }) {
  return (
    <Container className='mt-3'>
      <TextField
        id="liEmail"
        label="Email"
        placeholder="email@gmail.com"
        className="m-2"
        onChange={(event) => { setEmail(event.target.value) }}
        />
      <TextField
        id="liPassword"
        type="password"
        className="m-2"
        onChange={(event) => { setPassword(event.target.value) }}
        label="Password"
      />
      <h4>{user?.email}</h4>
    </Container>
  )
}