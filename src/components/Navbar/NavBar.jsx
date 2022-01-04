import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import CardWiget from './CardWiget';
import './navBar.css';
import { useCartContext } from '../context/CartContext';

function NavBarCustom() {
  const totalUnidades = (useCartContext)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container className="containerNav">
        <Link className="letras animate__animated animate__lightSpeedInLeft" to="/">React-Nike</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto animate__animated animate__lightSpeedInLeft">
            <Link className="letras" to="/categoria/Hombre">Hombre</Link>
            <Link className="letras"  to="/categoria/Mujer">Mujer</Link>

            </Nav>
          </Navbar.Collapse>
          <CardWiget/>
          <Link  className="letras animate__animated animate__lightSpeedInRight"to="/carrito">Carrito</Link>
          <p> {totalUnidades()} </p>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBarCustom
