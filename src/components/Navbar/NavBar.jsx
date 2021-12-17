import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CardWiget from './CardWiget';
import './navBar.css';

function NavBarCustom() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="containerNav">
        <Link className="letras" to="/">React-Ecommerce</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Link className="letras" to="/categoria/Nike">Nike</Link>
            <Link className="letras"  to="/categoria/Adidas">Adidas</Link>
            <Link className="letras" to="/detalle">Detalle</Link>

            </Nav>
          </Navbar.Collapse>
          <CardWiget/>
          <Link  className="letras"to="/carrito">Carrito</Link>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarCustom
