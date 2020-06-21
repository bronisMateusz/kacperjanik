import React from 'react';
import { Link } from 'react-scroll';
import { Container, Nav, Row } from 'react-bootstrap';
import pageLogo from '../assets/pageLogo.svg';

export const Footer = () => (
    <Container className="footer">
        <Row className="justify-content-center">
            <a href="#href">
                <img src={pageLogo} alt="logo" height="50px" />
            </a>
        </Row>
        <Row className="footer-nav justify-content-center">
            <Nav className="justify-content-center">
            <Nav.Item>
                    <Nav.Link>
                        <Link activeClass="active" to="jumbo" smooth={true}>Start</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link activeClass="active" to="about-me" smooth={true} offset={-100}>O mnie</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link activeClass="active" to="offer-section" smooth={true} offset={-100}>Oferta</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                        <Link activeClass="active" to="advantages-section" smooth={true} offset={-100}>Korzyści</Link>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link>
                         <Link activeClass="active" to="contact-section" smooth={true} offset={-100}>Kontakt</Link>
                         </Nav.Link>
                </Nav.Item>
            </Nav>
        </Row>
        <Row className="justify-content-center">
            <p>Copyright&copy;{new Date().getFullYear()} bronisMateusz</p>
        </Row>
    </Container>
)