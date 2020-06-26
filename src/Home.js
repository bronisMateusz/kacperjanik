import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import meImage from './assets/meImage.png';
import offer1Img from './assets/offer1.jpg';
import offer2Img from './assets/offer2.jpg';
import offer3Img from './assets/offer3.jpg';
import offer4Img from './assets/offer4.jpg';
import offer5Img from './assets/offer5.jpg';
import offer6Img from './assets/offer6.jpg';
import {ReactComponent as Adv1Img} from './assets/adv1.svg';
import {ReactComponent as Adv2Img} from './assets/adv2.svg';
import {ReactComponent as Adv3Img} from './assets/adv3.svg';
import {ReactComponent as Adv4Img} from './assets/adv4.svg';
import {ReactComponent as Adv5Img} from './assets/adv5.svg';
import {ReactComponent as Adv6Img} from './assets/adv6.svg';
import {ReactComponent as Adv7Img} from './assets/adv7.svg';
import {ReactComponent as Adv8Img} from './assets/adv8.svg';
import {ReactComponent as PhoneImg} from './assets/phone.svg';
import {ReactComponent as MailImg} from './assets/mail.svg';
import {ReactComponent as FbImg} from './assets/fb.svg';
import {ReactComponent as IgImg} from './assets/ig.svg';

export const Home = () => (
    <Container fluid>
        <Row className="jumbo">
            <Container>
                <Row className="jumbo-wrapper align-items-center">
                    <Col lg={{span: 7, offset: 5}} data-aos="zoom-in">
                        <h3 className="jumbo-subtitle">trener personalny</h3>
                        <h2 className="jumbo-title">Kacper<br />Janik</h2>
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row className="about-me">
            <Container className="pl-4 pr-4 pt-5">
                <Row>
                    <Col md="6" className="align-self-center pb-5" data-aos="fade-up">
                        <h2 className="section-title">Cześć,</h2>
                        <p className="pt-4">Mam na imię Kacper i jestem certyfikowanym trenerem personalnym oraz podejmuję studia na warszawskiej uczelni na kierunku dietetyki klinicznej.<br /><br />Jeśli chodzi o moje doświadczenie trenerskie - specjalizuje się w prowadzeniu treningów odpowiednio sprecyzowanych pod daną osobę (budowa siły, typowa hipertrofia mięśniowa, maksymalizacja spalania tkanki tłuszczowej), a także układaniu diet oraz planów treningowych z myślą zarówno o redukcji tkanki tłuszczowej jak i o budowaniu masy mięśniowej. Dodatkowo jestem osobą przygotowującą się do swojego pierwszego startu w zawodach sylwetkowych. W trakcie okresu przygotowań sprawdzam czy teoria ma realne przełożenie na praktykę. Wszystko po to by wiedzieć jak najlepiej współpracować z podopiecznymi.<br /><br />Całość będzie indywidualnie dopasowana do Twoich możliwości. Gwarantuję Ci, że wyjście na ćwiczenia to nie będzie przymus, a przyjemność! Zmiana myślenia, pozytywne nastawienie i dobre samopoczucie to cechy, które zagoszczą u Ciebie na co dzień dzięki podjęciu nowej aktywności fizycznej oraz wprowadzeniu zmian żywieniowych.</p>
                    </Col>
                    <Col md="6" className="align-self-end">
                        <Image src={meImage} alt="moje zdjęcie" fluid data-aos="fade-up" />
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row className="offer-section">
            <Container className="pt-5 pb-5 p-4">
                <Row data-aos="fade-up" data-aos-duration="1500">
                    <Col md={{span: 5, order: 1}} className="offer-img align-self-center">
                        <Image src={offer1Img} alt="zdjęcie oferty" fluid />
                    </Col>
                    <Col md={{span: 7, order: 2}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">indywidualnie rozpisana</h6>
                        <h2 className="section-title">dieta</h2>
                        <h3 className="offer-price">129 zł</h3>
                        <p className="offer-dscr">W ramach tej opcji otrzymasz ode mnie elastyczną dietę dopasowaną indywidualnie dla Ciebie. Nie wyznaczam Ci sztywnych założeń co do produktów, które będziesz spożywać. Posiłki możesz komponować w dowolny sposób odpowiadający Twoim preferencjom korzystając z wytycznych i wskazówek, które ułatwią Ci drogę do wyznaczonego celu. Taki schemat diety z pewnością Ci się spodoba, a co najważniejsze będzie skuteczny i wyrobi w Tobie dobre i długotrwałe nawyki żywieniowe.</p>
                    </Col>
                </Row>
                <Row data-aos="fade-up">
                    <Col md={{span: 5, order: 4}} className="offer-img align-self-center">
                        <Image src={offer2Img} alt="zdjęcie oferty" fluid />
                    </Col>
                    <Col md={{span: 7, order: 3}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">indywidualnie dopasowany</h6>
                        <h2 className="section-title">trening</h2>
                        <h3 className="offer-price">99 zł</h3>
                        <p className="offer-dscr">Marzysz o poprawie swojej masy mięśniowej? A może chcesz zyskać więcej siły, wzmocnić wytrzymałość lub wydolność? Być może chcesz po prostu zacząć swoją przygodę z siłownią i nie wiesz jak się do tego zabrać w najlepszy sposób? Rozpisany przeze mnie plan treningowy indywidualnie dla Ciebie z pewnością Ci to wszystko ułatwi! </p>
                    </Col>
                </Row>
                <Row data-aos="fade-up">
                    <Col md={{span: 5, order: 5}} className="offer-img align-self-center">
                        <Image src={offer3Img} alt="zdjęcie oferty" fluid />
                    </Col>
                    <Col md={{span: 7, order: 6}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">specjalnie dobrany</h6>
                        <h2 className="section-title">pakiet personalny</h2>
                        <h6 className="section-subtitle">(dieta, plan treningowy, suplementacja)</h6>
                        <h3 className="offer-price">179 zł</h3>
                        <p className="offer-dscr">Spersonalizowany dla Ciebie pakiet pozwoli Ci w odpowiedni sposób połączyć treningi z dietą i uzupełnieniem wszystkiego suplementacją dla osiągnięcia jak najlepszych efektów. Uwzględnia oczywiście też Twoje preferencje oraz zastrzeżenia. </p>
                    </Col>
                </Row>
                <Row data-aos="fade-up">
                    <Col md={{span: 5, order: 8}} className="offer-img align-self-center">
                        <Image src={offer4Img} alt="zdjęcie oferty" fluid />
                    </Col>
                    <Col md={{span: 7, order: 7}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">doskonały</h6>
                        <h2 className="section-title">dla wymagających</h2>
                        <h6 className="section-subtitle">(dieta, plan treningowy, suplementacja, opieka trenerska)</h6>
                        <h3 className="offer-price">259 zł</h3>
                        <p className="offer-dscr">Jest to połączenie wszystkich powyższych pakietów wraz z możliwością konsultacji na bieżąco Twoich postępów, zastrzeżeń i rozwiązywania wszelkich wątpliwości. Ponadto regularnie, w wyznaczonym przeze mnie czasie, wysyłasz raporty z poszczególnymi parametrami i tym jak przepracowałeś otrzymane założenia dietetyczno-treningowe, dzięki czemu w łatwy sposób będziemy mogli wprowadzać zmiany dla uzyskiwania ciągłych efektów.</p>
                    </Col>
                </Row>
                <Row data-aos="fade-up">
                    <Col md={{span: 5, order: 9}} className="offer-img align-self-center">
                        <Image src={offer5Img} alt="zdjęcie oferty" fluid />
                    </Col>
                    <Col md={{span: 7, order: 10}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">trening</h6>
                        <h2 className="section-title">personalny</h2>
                        <h3 className="offer-price">70 zł</h3>
                        <p className="offer-dscr">Ta opcja dotyczy indywidualnych treningów pod moim okiem na siłowni dzięki czemu będziesz miał/a pewność, że wszystko wykonujesz z dbałością o każdy szczegół.</p>
                    </Col>
                </Row>
                <Row data-aos="fade-up">
                    <Col md={{span: 5, order: 12}} className="offer-img align-self-center">
                        <Image src={offer6Img} alt="zdjęcie oferty" fluid />
                    </Col>
                    <Col md={{span: 7, order: 11}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">trening</h6>
                        <h2 className="section-title">personalny</h2>
                        <h6 className="section-subtitle">z dojazdem do domu</h6>
                        <h3 className="offer-price">cena ustalana indywidualnie</h3>
                        <p className="offer-dscr">Jest to opcja skierowana dla osób, którym ciężko byłoby pogodzić obowiązki z dojazdami na siłownie lub po prostu chcą zacząć, jednak z jakiś powodów mają opór przed postawieniem pierwszego kroku na siłowni. Dzięki tej opcji masz możliwość skorzystania z treningów pod moim okiem, z dostarczonym przeze mnie sprzętem w Twoim domu. </p>
                    </Col>
                </Row>       
             </Container>
        </Row>
        <Row className="advantages-section p-4 pt-5" >
            <Container>
                <Row className="justify-content-center pb-5">
                    <h2 className="section-title" data-aos="zoom-in">Dlaczego warto podjąć ze mną współpracę?</h2>
                </Row>
                <Row>
                    <Col md="6">
                        <Row className="mb-5" data-aos="fade-up">
                            <Col sm="3">
                                <Adv1Img className="advantage-img mb-4 mb-sm-0" />
                            </Col>
                            <Col className="align-self-center">                            
                                <p>Zapewnię Ci wiedzę popartą praktyką i doświadczeniem.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row className="mb-5" data-aos="fade-up">
                            <Col sm="3">
                                <Adv2Img className="advantage-img mb-4 mb-sm-0" />
                            </Col>
                            <Col className="align-self-center">                            
                                <p>Zadbam by każdy element treningu był dopasowany do Twoich możliwości i celu.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Row className="mb-5" data-aos="fade-up">
                            <Col sm="3">
                                <Adv3Img className="advantage-img mb-4 mb-sm-0" />
                            </Col>
                            <Col className="align-self-center">                            
                                <p>Pomogę Ci wyrobić długotrwałe nawyki żywieniowe i treningowe.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row className="mb-5" data-aos="fade-up">
                            <Col sm="3">
                                <Adv4Img className="advantage-img mb-4 mb-sm-0" />
                            </Col>
                            <Col className="align-self-center">                            
                                <p>Nauczysz się jak komponować posiłki i nie mieć zbędnego stresu o dietę przed wyjściami czy wyjazdami.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Row className="mb-5" data-aos="fade-up">
                            <Col sm="3">
                                <Adv5Img className="advantage-img mb-4 mb-sm-0" />
                            </Col>
                            <Col className="align-self-center">                            
                                <p>Stale będę kontrolował Twoje postępy i wprowadzał zmiany, by osiągnąć jak najszybciej wymarzony cel.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row className="mb-5" data-aos="fade-up">
                            <Col sm="3">
                                <Adv6Img className="advantage-img mb-4 mb-sm-0" />
                            </Col>
                            <Col className="align-self-center">                            
                                <p>Dostaniesz ode mnie wiele cennych wskazówek.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md="6">
                        <Row className="mb-5" data-aos="fade-up">
                            <Col sm="3">
                                <Adv7Img className="advantage-img mb-4 mb-sm-0" />
                            </Col>
                            <Col className="align-self-center">                            
                                <p>Gwarantuje Ci lepsze samopoczucie i satysfakcję.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row className="mb-5" data-aos="fade-up">
                            <Col sm="3">
                                <Adv8Img className="advantage-img mb-4 mb-sm-0" />
                            </Col>
                            <Col className="align-self-center">                            
                                <p>Pokaże Ci, że dieta i treningi to nie katorga, a coś co będziesz robić z przyjemnością.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Row>        
        <Row className="contact-section p-4 pt-5">
            <Container>
                <Row className="justify-content-center" data-aos="zoom-in" data-aos-duration="1500">
                    <Col>
                        <h2 className="section-title mb-2">Kontakt</h2>
                        <h6 className="section-subtitle">Znajdziesz mnie również tutaj</h6>
                    </Col>
                </Row>
                <Row className="justify-content-center fle" data-aos="zoom-in" data-aos-duration="1500">
                    <Button className="contact-btn m-3 mt-5 mb-5 p-2" href="tel:535 952 491">
                        <PhoneImg className="btn-pic" />
                    </Button>
                    <Button className="contact-btn m-3 mt-5 mb-5 p-2" href="mailto:health@kacperjanik.pl">
                        <MailImg className="btn-pic" />
                    </Button>
                    <Button className="contact-btn m-3 mt-5 mb-5 p-2" target="_blank" href="http://www.fb.com/kacperjaniktbh">
                        <FbImg className="btn-pic" />
                    </Button>
                    <Button className="contact-btn m-3 mt-5 mb-5 p-2" target="_blank" href="http://www.instagram.com/kacperjaniktbh">
                        <IgImg className="btn-pic" />
                    </Button>
                </Row>
            </Container>
        </Row>
    </Container>
)