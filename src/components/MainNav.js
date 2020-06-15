import React from 'react';
import { Navbar, Nav, Image} from 'react-bootstrap';
import styled from 'styled-components';
import pageLogo from '../assets/pageLogo.svg';

const Styles = styled.div`
    .navbar{
        background-color: #141414;
    }

    .navbar-toggler-icon{
        
    }

    .navbar-nav .nav-link {
        color: #FFFFFF;
        text-transform: uppercase;

        &:hover{
            color: #FFFFFF;
            font-size: 700;
        }
    }

    .btn-primary{
        background-color: transparent;
        border-color: #FFFFFF;
        border-radius: 100px;
        margin-left: 10px;
        padding: 7px 15px;

        &:hover{
            border: 2px solid #FFFFFF;;
            padding: 6px 14px;
        }
    }
`;

export const MainNav = () => (
    <Styles>
        <Navbar variant="dark" expand="lg" fixed="top">
            <Navbar.Brand href="/">
                <Image src={pageLogo} alt="logo" height="35px" />
            </Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Główna</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Offer">Oferta</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/Contact">Kontakt</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)