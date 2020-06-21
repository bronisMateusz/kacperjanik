import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
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
        </Row>
        <Row className="justify-content-center">
            <p>Copyright&copy;{new Date().getFullYear()} bronisMateusz</p>
        </Row>
    </Container>
)