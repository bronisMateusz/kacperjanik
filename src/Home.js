import React from 'react';
import { Jumbotron as Jumbo, Container, Row, Col, Image, Button} from 'react-bootstrap';
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
        font-size: 1.6em;
        color: #A4A4A4;
    }

    .jumbo-title {
        font-size: 5em;
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
                <h3 className="jumbo-subtitle">...</h3>
                <h2 className="jumbo-title">...</h2>
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
                    <Col lg={7} className="align-self-center">
                        <div className="offer-image offer-image1">
                        </div>
                    </Col>
                    <Col lg={5} className="align-self-center">
                        <h2>indywidualnie rozpisana dieta</h2>
                        <h3>dla ciebie oraz twoich możliwości</h3>
                        <div className="price">
                            <p>129 zł</p>
                        </div>
                        <p>W ramach tej opcji otrzymasz ode mnie elastyczną dietę dopasowaną indywidualnie dla Ciebie. Nie wyznaczam Ci sztywnych założeń co do produktów, które będziesz spożywać. Posiłki możesz komponować w dowolny sposób odpowiadający Twoim preferencjom korzystając z wytycznych i wskazówek, które ułatwią Ci drogę do wyznaczonego celu. Taki schemat diety z pewnością Ci się spodoba, a co najważniejsze będzie skuteczny i wyrobi w Tobie dobre i długotrwałe nawyki żywieniowe.</p>
                        <Button variant="dark" size="lg">więcej</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} className="align-self-center">
                        <div className="offer-image offer-image2">
                        </div>
                    </Col>
                    <Col lg={5} className="align-self-center">
                        <h2>indywidualnie dopasowany trening</h2>
                        <h3>dla ciebie, twoich możliwości oraz celów</h3>
                        <div className="price">
                            <p>99 zł</p>
                        </div>
                        <p>Marzysz o poprawie swojej masy mięśniowej? A może chcesz zyskać więcej siły, wzmocnić wytrzymałość lub wydolność? Być może chcesz po prostu zacząć swoją przygodę z siłownią i nie wiesz jak się do tego zabrać w najlepszy sposób? Rozpisany przeze mnie plan treningowy indywidualnie dla Ciebie z pewnością Ci to wszystko ułatwi! </p>
                        <Button variant="dark" size="lg">więcej</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} className="align-self-center">
                        <div className="offer-image offer-image3">
                        </div>
                    </Col>
                    <Col lg={5} className="align-self-center">
                        <h2>specjalnie dobrany</h2>
                        <h3>dla ciebie pakiet indywidywidualny (dieta, plan treningowy, suplementacja)</h3>
                        <div className="price">
                            <p>179 zł</p>
                        </div>
                        <p>Spersonalizowany dla Ciebie pakiet pozwalający Ci w odpowiedni sposób połączyć treningi z dietą i uzupełnienie wszystkiego suplementacją dla osiągnięcia jak najlepszych efektów.  Uwzględnia Twoje preferencje oraz zastrzeżenia. </p>
                        <Button variant="dark" size="lg">więcej</Button>
                    </Col>
                </Row>
                <Row>
                    <Col lg={7} className="align-self-center">
                        <div className="offer-image offer-image4">
                        </div>
                    </Col>
                    <Col lg={5} className="align-self-center">
                        <h2>pakiet dla najbardziej wymagających</h2>
                        <h3>(dieta, plan treningowy, suplementacja, opieka trenerska)</h3>
                        <div className="price">
                            <p>259 zł</p>
                        </div>
                        <p>Ta opcja z pewnością trafi do osób najbardziej wymagających. Jest to połączenie wszystkich powyższych pakietów wraz z możliwością konsultacji na bieżąco Twoich postępów, zastrzeżeń i rozwiązywania wszelkich wątpliwości. Ponadto regularnie w wyznaczonym przeze mnie czasie wysyłasz raporty z poszczególnymi parametrami i tym jak przepracowałeś otrzymana ode mnie założenia dietetyczno-treningowe dzięki czemu w łatwy sposób będziemy mogli wprowadzać zmiany dla uzyskiwania ciągłych efektów.</p>
                        <Button variant="dark" size="lg">więcej</Button>
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