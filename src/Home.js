import React from 'react';
import { Jumbotron as Jumbo, Container, Media, Row, Col, Image } from 'react-bootstrap';
import styled from 'styled-components';
import jumboImage from './assets/jumboImage.jpg';
import aboutMeBackground from './assets/aboutMeBackground.jpg';
import meImage from './assets/meImage.png';
import offer1Image from './assets/offer1Image.jpg';
import offer2Image from './assets/offer2Image.jpg';
import offer3Image from './assets/offer3Image.jpg';
import offer4Image from './assets/offer4Image.jpg';

const Styles = styled.div`
    h2,h3{
        text-transform: uppercase;
    }

    .jumbo {
        margin: 0;
        padding: 0px 15px;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        background: url(${jumboImage}) no-repeat bottom;
        background-size: cover;
        color: #FFFFFF;
        height: 95vh;;
        z-index: -2;
        text-align:right;
    }

    .jumbo-subtitle {
        font-size: 1.6rem;
        color: #A4A4A4;
    }

    .jumbo-title {
        font-size: 5rem;
        letter-spacing: 3rem;
        margin-right: -50px;
    }

    .about-me {
        background: url(${aboutMeBackground}) no-repeat;
        padding: 50px 15px 0px;
        margin: 0;
    }

    .about-me h2 {
        margin-bottom: 25px;
        color: #FFFFFF;
    }

    .about-me p{
        text-align: justify;
    }

    .offer-section {
        background-color: #141414;
        color: #FFFFFF;
    }

    .offer-section p{
        text-align: justify;
    }

    .offer-section .row{
        margin-top: 50px;
    }

    .offer-section .col-md-7{
        padding: 0;
    }

    .offer-section .offer-image {
        width: 100%;
        height: 400px;
    }

    .offer-section .offer-image1 {
        background: url(${offer1Image}) no-repeat;
        background-size: 100% auto;
    }

    .offer-section .offer-image2 {
        background: url(${offer2Image}) no-repeat;
        background-size: 100% auto;
    }

    .offer-section .offer-image3 {
        background: url(${offer3Image}) no-repeat;
        background-size: 100% auto;
    }

    .offer-section .offer-image4 {
        background: url(${offer4Image}) no-repeat;
        background-size: 100% auto;
    }
`;

export const Home = () => (
    <Styles>
        <Jumbo className="jumbo" fluid>
            <Container>
                <h3 className="jumbo-subtitle">trener personalny</h3>
                <h2 className="jumbo-title">Kacper<br />Janik</h2>
            </Container>
        </Jumbo>
        <Row className="about-me">
            <Container>
                <Row>
                    <Col md={6} className="align-self-center">
                        <h2>Cześć,</h2>
                        <p>Mam na imię Kacper i jestem certyfikowanym trenerem personalnym oraz studiuję dietetykę na Warszawskiej uczelni. Mimo młodego wieku cechuje mnie odpowiedzialność, wysoka kultura osobista, łatwość w nawiązywaniu kontaktu.</p>
                        <p>Wszystko będzie indywidualnie dopasowane do Twoich możliwości. Gwarantuję Ci, że wyjście na ćwiczenia to nie będzie przymus, a przyjemność! Zmiana myślenia, pozytywne nastawienie i dobre samopoczucie to cechy, które zagoszczą u Ciebie na co dzień dzięki podjęciu nowej aktywności fizycznej oraz wprowadzeniu zmian żywieniowych</p>
                    </Col>
                    <Col md={6}>
                        <Image src={meImage} fluid />
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row className="offer-section">
            <Container fluid>
                <Row>
                    <Col lg={7}>
                        <div className="offer-image offer-image1">
                        </div>
                    </Col>
                    <Col lg={5} className="align-self-center p-5">
                        <h3>indywidualnie rozpisana</h3>
                        <h2>dieta</h2>
                        <div className="price">
                            <p>od 000 zł</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="align-self-center p-5">
                        <h3>indywidualnie dopasowane</h3>
                        <h2>treningi</h2>
                        <div className="price">
                            <p>od 000 zł</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </Col>
                    <Col lg={7}>
                        <div className="offer-image offer-image2">
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7}>
                        <div className="offer-image offer-image3">
                        </div>
                    </Col>
                    <Col lg={5} className="align-self-center p-5">
                        <h3>doskonale dobrane</h3>
                        <h2>pakiety indywidualne</h2>
                        <div className="price">
                            <p>od 000 zł</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={5} className="align-self-center p-5">
                        <h3>idealny dla wymagających</h3>
                        <h2>pakiet vip!</h2>
                        <div className="price">
                            <p>od 000 zł</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </Col>
                    <Col lg={7}>
                        <div className="offer-image offer-image4">
                        </div>
                    </Col>
                </Row>       
             </Container>
        </Row>
        <Row className="advantages-section">
            <Container>
                <h2>Dlaczego warto ze mną ćwiczyć</h2>
                <Row>
                    <Col>
                        Super zalety
                    </Col>
                    <Col>
                        Super zalety2
                    </Col>
                </Row>
            </Container>
        </Row> 
    </Styles>
)