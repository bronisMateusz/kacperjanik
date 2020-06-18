import React from 'react';
import { Jumbotron as Jumbo, Container, Row, Col, Image} from 'react-bootstrap';
import styled from 'styled-components';
import jumboImage from './assets/jumboImage.jpg';
import aboutMeBackground from './assets/aboutMeBackground.jpg';
import meImage from './assets/meImage.png';
import offer1Image from './assets/offer1Image.jpg';
import offer2Image from './assets/offer2Image.jpg';
import offer3Image from './assets/offer3Image.jpg';
import offer4Image from './assets/offer4Image.jpg';

const Styles = styled.div`
    Row, COl{
        margin: 0;
        padding: 0;
    }

    h2,h3,h4,h5,h6{
        text-transform: uppercase;
        margin: 0;
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

    .section-title,
    .section-subtitle{
        margin: 0;
        padding-left: 10px;
        border-left: 10px solid #FFFFFF;
    }

    .about-me {
        background: url(${aboutMeBackground}) no-repeat;
        padding: 50px 15px 0px;
        margin: 0;
    }

    .about-me .section-title {
        margin-bottom: 25px;
        color: #FFFFFF;
    }

    .about-me p{
        text-align: justify;
    }

    .offer-section{
        background-color: #141414;
        color: #FFFFFF;
    }

    .offer-section .offer-item{
        margin: 50px auto;
    }

    .offer-section .offer-item .offer-price{
        margin: 30px auto 10px;
        font-size: 1.6rem;
        text-transform: uppercase;
        text-align: left;
        color: #BB9847;
    }

    .offer-section .offer-item .offer-img{
        padding: 0;
    }

    .offer-section .offer-item .offer-dscr{
        text-align: justify;
        margin: 0;
    }

    @media (max-width: 991px){
        .offer-section .offer-item .offer-info{
            padding: 50px 50px 0px;
        }
    }

    @media (min-width: 992px){
        .offer-section .offer-item .offer-right{
            padding: 0px 50px 0px 20px;
        }

        .offer-section .offer-item .offer-left{
            padding: 0px 20px 0px 50px;
        }
    }

    @media (max-width: 1199.98px){
        .offer-section .offer-container{
            margin: 0;
            padding: 0;
            max-width: 100%;
        }
    }

    @media (min-width: 1200px){
        .offer-section .offer-item .offer-right{
            padding-right: 0px;
        }

        .offer-section .offer-item .offer-left{
            padding-left: 0px;
        }
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
                        <h2 className="section-title">Cześć,</h2>
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
            <Container className="offer-container">
                <Row className="offer-item">
                    <Col lg={{span: 7, oredr: 1}} className="align-self-center offer-img">
                        <Image src={jumboImage} fluid />
                    </Col>
                    <Col lg={{span: 5, oreder: 2}} className="align-self-center offer-info offer-right">
                        <h6 className="section-subtitle">indywidualnie rozpisana</h6>
                        <h2 className="section-title">dieta</h2>
                        <div className="offer-price">
                            <p>129 zł</p>
                        </div>
                        <p className="offer-dscr">W ramach tej opcji otrzymasz ode mnie elastyczną dietę dopasowaną indywidualnie dla Ciebie. Nie wyznaczam Ci sztywnych założeń co do produktów, które będziesz spożywać. Posiłki możesz komponować w dowolny sposób odpowiadający Twoim preferencjom korzystając z wytycznych i wskazówek, które ułatwią Ci drogę do wyznaczonego celu. Taki schemat diety z pewnością Ci się spodoba, a co najważniejsze będzie skuteczny i wyrobi w Tobie dobre i długotrwałe nawyki żywieniowe.</p>
                    </Col>
                </Row>
                <Row className="offer-item">
                    <Col lg={{span: 7, order: 4}} className="align-self-center offer-img">
                        <Image src={jumboImage} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 3}} className="align-self-center offer-info offer-left">
                        <h6 className="section-subtitle">indywidualnie dopasowany</h6>
                        <h2 className="section-title">trening</h2>
                        <div className="offer-price">
                            <p>99 zł</p>
                        </div>
                        <p className="offer-dscr">Marzysz o poprawie swojej masy mięśniowej? A może chcesz zyskać więcej siły, wzmocnić wytrzymałość lub wydolność? Być może chcesz po prostu zacząć swoją przygodę z siłownią i nie wiesz jak się do tego zabrać w najlepszy sposób? Rozpisany przeze mnie plan treningowy indywidualnie dla Ciebie z pewnością Ci to wszystko ułatwi! </p>
                    </Col>
                </Row>
                <Row className="offer-item">
                    <Col lg={{span: 7, order: 5}} className="align-self-center offer-img">
                        <Image src={jumboImage} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 6}} className="align-self-center offer-info offer-right">
                        <h6 className="section-subtitle">specjalnie dobrany</h6>
                        <h2 className="section-title">pakiet personalny</h2>
                        <h6 className="section-subtitle">(dieta, plan treningowy, suplementacja)</h6>
                        <div className="offer-price">
                            <p>179 zł</p>
                        </div>
                        <p className="offer-dscr">Spersonalizowany dla Ciebie pakiet pozwoli Ci w odpowiedni sposób połączyć treningi z dietą i uzupełnieniem wszystkiego suplementacją dla osiągnięcia jak najlepszych efektów. Uwzględnia oczywiście też Twoje preferencje oraz zastrzeżenia. </p>
                    </Col>
                </Row>
                <Row className="offer-item">
                    <Col lg={{span: 7, order: 8}} className="align-self-center offer-img">
                        <Image src={jumboImage} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 7}} className="align-self-center offer-info offer-left">
                        <h6 className="section-subtitle">doskonały</h6>
                        <h2 className="section-title">dla wymagających</h2>
                        <h6 className="section-subtitle">(dieta, plan treningowy, suplementacja, opieka trenerska)</h6>
                        <div className="offer-price">
                            <p>259 zł</p>
                        </div>
                        <p className="offer-dscr">Jest to połączenie wszystkich powyższych pakietów wraz z możliwością konsultacji na bieżąco Twoich postępów, zastrzeżeń i rozwiązywania wszelkich wątpliwości. Ponadto regularnie, w wyznaczonym przeze mnie czasie, wysyłasz raporty z poszczególnymi parametrami i tym jak przepracowałeś otrzymane założenia dietetyczno-treningowe, dzięki czemu w łatwy sposób będziemy mogli wprowadzać zmiany dla uzyskiwania ciągłych efektów.</p>
                    </Col>
                </Row>
                <Row className="offer-item">
                    <Col lg={{span: 7, order: 9}} className="align-self-center offer-img">
                        <Image src={jumboImage} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 10}} className="align-self-center offer-info offer-right">
                        <h6 className="section-subtitle">trening</h6>
                        <h2 className="section-title">personalny</h2>
                        <div className="offer-price">
                            <p>70 zł</p>
                        </div>
                        <p className="offer-dscr">Ta opcja dotyczy indywidualnych treningów pod moim okiem na siłowni dzięki czemu będziesz miał/a pewność, że wszystko wykonujesz z dbałością o każdy szczegół.</p>
                    </Col>
                </Row>
                <Row className="offer-item">
                    <Col lg={{span: 7, order: 12}} className="align-self-center offer-img">
                        <Image src={jumboImage} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 11}} className="align-self-center offer-info offer-left">
                        <h6 className="section-subtitle">trening</h6>
                        <h2 className="section-title">personalny</h2>
                        <h6 className="section-subtitle">z dojazdem do domu</h6>
                        <div className="offer-price">
                            <p>cena ustalana indywidualnie</p>
                        </div>
                        <p className="offer-dscr">Jest to opcja skierowana dla osób, którym ciężko byłoby pogodzić obowiązki z dojazdami na siłownie lub po prostu chcą zacząć, jednak z jakiś powodów mają opór przed postawieniem pierwszego kroku na siłowni. Dzięki tej opcji masz możliwość skorzystania z treningów pod moim okiem, z dostarczonym przeze mnie sprzętem w Twoim domu. </p>
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