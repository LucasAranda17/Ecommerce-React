import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CardWiget from './CardWiget';

function NavBarCustom() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Link to="/">React-Ecommerce</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link to="/categoria/Nike">Nike</Link>
            <Link to="/categoria/Adidas">Adidas</Link>
            <Link to="/detalle">Detalle</Link>

            </Nav>
          </Navbar.Collapse>
          <CardWiget/>
          <Link to="/carrito">Carrito</Link>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarCustom
