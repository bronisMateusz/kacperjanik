import React from 'react';
import { Link } from 'react-scroll';
import { Container, Nav, Row } from 'react-bootstrap';
import pageLogo from '../assets/pageLogo.svg';

export const Footer = () => (
    <Container className="footer p-4 pt-5 pb-5">
        <Row className="justify-content-center">
            <a href="#href">
                <img src={pageLogo} alt="logo" height="50px" />
            </a>
        </Row>
        <Row className="justify-content-center pt-5 pb-5">
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
            <a className="copy" target="_blank" rel="noopener noreferrer" href="http://fb.com/bronisMateusz">Copyright&copy;{new Date().getFullYear()} bronisMateusz</a>
        </Row>
    </Container>
)