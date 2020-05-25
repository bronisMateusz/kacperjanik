import React from 'react';
import { Container, Nav, Row } from 'react-bootstrap';
import styled from 'styled-components';
import pageLogo from '../pageLogo.svg';

const Styles = styled.div`
    .container{
        margin-top: 100px;
        color: #A4A4A4;
    }

    .row{
        margin-bottom: 50px;
    }
    
    .nav-link{
        color: #FFFFFF;
        text-transform: uppercase;
    }
`;

export const Footer = () => (
    <Styles>
        <Container>
            <Row className="justify-content-center">
                <a href="#href">
                    <img src={pageLogo} alt="logo" height="50px" />
                </a>
            </Row>
            <Row className="justify-content-center">
                <Nav>
                    <Nav.Link href="/">Główna</Nav.Link>
                    <Nav.Link href="/">Oferta</Nav.Link>
                    <Nav.Link href="/">Kontakt</Nav.Link>
                </Nav>
            </Row>
            <Row className="justify-content-center">
                <p>Copyright&copy;{new Date().getFullYear()} bronisMateusz</p>
            </Row>
        </Container>
    </Styles>
)