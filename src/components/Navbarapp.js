import { Container, Nav, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ImCart, ImHome } from "react-icons/im";
import { useRef } from "react";
function Navbarapp() {
    const cartLen = useSelector(state => state.cart);
    const navBar = useRef();
    return (
        <Navbar fixed="top" expand="lg" className="bg-secondary" ref={navBar}>
            <Container>
                <Link to="/" className="navbar-brand text-light">Cart App</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Link to="/" className="nav-link text-light">
                            <div className="Home-icon p-2 border border-primary rounded-circle">
                                <ImHome className="fs-5" />
                            </div>
                        </Link>
                        <Link to="/cart" className="nav-link text-light">
                            <div className="icons border border-primary rounded-circle p-2">
                                <ImCart className="cart-icon" />
                                <span className="cart-item bg-primary">{cartLen.length} </span>
                            </div>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Navbarapp;