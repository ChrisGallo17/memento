import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../img/logo-white.png'
import AuthButton from "./AuthButton";
import { Link } from 'react-router';

export default function NavBar ({login, logout, register, user}) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >
          <Link to="/" className="Nav__brand">
            <img
              alt=""
              src={logo}
              height="35"
              className="d-inline-block align-top"
            />{' '}
          </Link>
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
          <Nav.Link href="#feed">Feed</Nav.Link>
          <Nav.Link eventKey={2} href="#login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <AuthButton 
        login={()=>login()} 
        logout={()=>logout()} 
        register={()=>register()} 
        user={user} 
      />

      </Container>
    </Navbar>
  )
}