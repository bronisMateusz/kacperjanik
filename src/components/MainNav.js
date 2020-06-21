import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Navbar, Nav, Image} from 'react-bootstrap';
import pageLogo from '../assets/pageLogo.svg';

export const MainNav = () => (
    <Navbar variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/">
            <Image src={pageLogo} alt="logo" height="35px" />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
        <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
                <Nav.Item>
                    <Nav.Link>
                        <Link to="jumbo">Start</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="about-me">O mnie</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="offer-section">Oferta</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link to="advantages-section">Korzyści</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                         <Link to="contact-section">Kontakt</Link>
                         </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)