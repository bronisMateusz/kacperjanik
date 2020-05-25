import React from 'react';
import Container from 'react-bootstrap/Container';

export const Layout = (props) => (
    <Container className="p-0" fluid>
        {props.children}
    </Container>
)