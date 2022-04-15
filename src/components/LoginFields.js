import { Button } from "@mui/material"
import { Form, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";

export default function LoginFields ({ login, setEmail, setPassword, user }) {
  let navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();
    login()
    navigate("../feed")
  };

  return (
    <Container className='mt-3'>
      <Form onSubmit={onSubmit}> 
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            onChange={(event) => { setEmail(event.target.value) }}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            onChange={(event) => { setPassword(event.target.value) }}
          />
        </Form.Group>
        <Button variant="contained" type="submit">
          Sign in
        </Button>
      </Form>

      
      {/* <TextField
        id="liPassword"
        type="password"
        className="m-2"
        onChange={(event) => { setPassword(event.target.value) }}
        label="Password"
      /> */}
      <h4>{user?.email}</h4>
    </Container>
  )
}