import React from 'react';
import { Link } from 'react-scroll';
import {Container, Navbar, Nav, Image} from 'react-bootstrap';
import pageLogo from '../assets/pageLogo.svg';

export const MainNav = () => (
    <Container fluid>
        <Navbar className="main-nav" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand href="/">
            <Image src={pageLogo} alt="logo" height="35px" />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
        <Navbar.Collapse id="navbar-toggle">
            <Nav className="align-items-center m-5 m-lg-1 ml-lg-auto">
                <Nav.Item className="mb-4 mb-lg-0">
                    <Nav.Link>
                        <Link activeClass="active" to="jumbo" smooth={true}>Start</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-4 mb-lg-0">
                    <Nav.Link>
                        <Link activeClass="active" to="about-me" smooth={true}>O mnie</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-4 mb-lg-0">
                    <Nav.Link>
                        <Link activeClass="active" to="offer-section" smooth={true}>Oferta</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className="mb-4 mb-lg-0">
                    <Nav.Link>
                        <Link activeClass="active" to="advantages-section" smooth={true} offset={-50}>Korzyści</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                         <Link activeClass="active" to="contact-section" smooth={true}>Kontakt</Link>
                         </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </Container> 
)