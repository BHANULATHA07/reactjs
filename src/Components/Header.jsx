import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDarkExample() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand >Pet Accessories</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          
          <Nav>
          <div className='profile'>
            <img src="https://lumiere-a.akamaihd.net/v1/images/ct_frozen_elsa_18466_22a50822.jpeg" alt="" />
          </div>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Elsa"
              menuVariant="dark"
            >
              <p>Welcome!!</p>
              
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Settings
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDarkExample;