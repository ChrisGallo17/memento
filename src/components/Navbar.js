import { Nav, Navbar, Container } from "react-bootstrap";
import logo from '../img/logo-white.png'
import AuthButton from "./AuthButton";
import { Link } from 'react-router-dom';

export default function NavBar ({login, logout, register, user, location}) {
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
            <Nav.Link>
              <Link to="feed" style={{ color: 'inherit', textDecoration: 'none' }}>
                Feed
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* {user.email && <div className="nav-link justify-content-right" style={{color: "#dee2e6"}}>{user.email}</div>} */}
        
        <AuthButton 
          login={()=>login()} 
          logout={()=>logout()} 
          register={()=>register()} 
          user={user} 
          location={location}
        />
      </Container>
    </Navbar>
  )
}