import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../img/logo-white.png'

export default function NavBar () {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            height="35"
            className="d-inline-block align-top"
          />{' '}
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}