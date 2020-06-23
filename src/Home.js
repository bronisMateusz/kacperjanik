import React from 'react';
import { Jumbotron as Jumbo, Container, Row, Col, Image, Button} from 'react-bootstrap';
import jumboImage from './assets/jumboImage.jpg';
import offer1Img from './assets/offer1.jpg';
import offer5Img from './assets/offer5.jpg';
import offer6Img from './assets/offer6.jpg';
import meImage from './assets/meImage.png';

export const Home = () => (
    <Container fluid>
        <Row className="jumbo align-content-center">
            <Container>
                <Row>
                    <Col lg={{span: 7, offset: 5}}>
                        <h3 className="jumbo-subtitle">trener personalny</h3>
                        <h2 className="jumbo-title">Kacper<br />Janik</h2>
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row className="about-me">
            <Container className="pl-4 pr-4 pt-5">
                <Row>
                    <Col lg={6} className="align-self-center pb-5">
                        <h2 className="section-title">Cześć,</h2>
                        <p className="pt-4">Mam na imię Kacper i jestem certyfikowanym trenerem personalnym oraz studiuję dietetykę na Warszawskiej uczelni.<br /><br />Jeśli chodzi o moje doświadczenie trenerskie - specjalizuje się w prowadzeniu treningów odpowiednio sprecyzowanych pod daną osobę (budowa siły, typowa hipertrofia mięśniowa, maksymalizacja spalania tkanki tłuszczowej), a także układaniu diet oraz planów treningowych z myślą zarówno o redukcji tkanki tłuszczowej jak i o budowaniu masy mięśniowej. Dodatkowo jestem osobą przygotowującą się do swojego pierwszego startu w zawodach sylwetkowych. W trakcie okresu przygotowań sprawdzam czy teoria ma realne przełożenie na praktykę. Wszystko po to by wiedzieć jak najlepiej współpracować z podopiecznymi.<br /><br />Wszystko będzie indywidualnie dopasowane do Twoich możliwości. Gwarantuję Ci, że wyjście na ćwiczenia to nie będzie przymus, a przyjemność! Zmiana myślenia, pozytywne nastawienie i dobre samopoczucie to cechy, które zagoszczą u Ciebie na co dzień dzięki podjęciu nowej aktywności fizycznej oraz wprowadzeniu zmian żywieniowych.</p>
                    </Col>
                    <Col lg={6} className="align-self-end">
                        <Image src={meImage} fluid />
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row className="offer-section">
            <Container className="pt-5 pr-4 pb-0 pl-4">
                <Row>
                    <Col lg={{span: 7, order: 1}} className="offer-img align-self-center">
                        <Image src={offer1Img} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 2}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">indywidualnie rozpisana</h6>
                        <h2 className="section-title">dieta</h2>
                        <h3 className="offer-price">129 zł</h3>
                        <p className="offer-dscr">W ramach tej opcji otrzymasz ode mnie elastyczną dietę dopasowaną indywidualnie dla Ciebie. Nie wyznaczam Ci sztywnych założeń co do produktów, które będziesz spożywać. Posiłki możesz komponować w dowolny sposób odpowiadający Twoim preferencjom korzystając z wytycznych i wskazówek, które ułatwią Ci drogę do wyznaczonego celu. Taki schemat diety z pewnością Ci się spodoba, a co najważniejsze będzie skuteczny i wyrobi w Tobie dobre i długotrwałe nawyki żywieniowe.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 7, order: 4}} className="offer-img align-self-center">
                        <Image src={offer1Img} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 3}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">indywidualnie dopasowany</h6>
                        <h2 className="section-title">trening</h2>
                        <h3 className="offer-price">99 zł</h3>
                        <p className="offer-dscr">Marzysz o poprawie swojej masy mięśniowej? A może chcesz zyskać więcej siły, wzmocnić wytrzymałość lub wydolność? Być może chcesz po prostu zacząć swoją przygodę z siłownią i nie wiesz jak się do tego zabrać w najlepszy sposób? Rozpisany przeze mnie plan treningowy indywidualnie dla Ciebie z pewnością Ci to wszystko ułatwi! </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 7, order: 5}} className="offer-img align-self-center">
                        <Image src={jumboImage} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 6}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">specjalnie dobrany</h6>
                        <h2 className="section-title">pakiet personalny</h2>
                        <h6 className="section-subtitle">(dieta, plan treningowy, suplementacja)</h6>
                        <h3 className="offer-price">179 zł</h3>
                        <p className="offer-dscr">Spersonalizowany dla Ciebie pakiet pozwoli Ci w odpowiedni sposób połączyć treningi z dietą i uzupełnieniem wszystkiego suplementacją dla osiągnięcia jak najlepszych efektów. Uwzględnia oczywiście też Twoje preferencje oraz zastrzeżenia. </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 7, order: 8}} className="offer-img align-self-center">
                        <Image src={jumboImage} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 7}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">doskonały</h6>
                        <h2 className="section-title">dla wymagających</h2>
                        <h6 className="section-subtitle">(dieta, plan treningowy, suplementacja, opieka trenerska)</h6>
                        <h3 className="offer-price">259 zł</h3>
                        <p className="offer-dscr">Jest to połączenie wszystkich powyższych pakietów wraz z możliwością konsultacji na bieżąco Twoich postępów, zastrzeżeń i rozwiązywania wszelkich wątpliwości. Ponadto regularnie, w wyznaczonym przeze mnie czasie, wysyłasz raporty z poszczególnymi parametrami i tym jak przepracowałeś otrzymane założenia dietetyczno-treningowe, dzięki czemu w łatwy sposób będziemy mogli wprowadzać zmiany dla uzyskiwania ciągłych efektów.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 7, order: 9}} className="offer-img align-self-center">
                        <Image src={offer5Img} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 10}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">trening</h6>
                        <h2 className="section-title">personalny</h2>
                        <h3 className="offer-price">70 zł</h3>
                        <p className="offer-dscr">Ta opcja dotyczy indywidualnych treningów pod moim okiem na siłowni dzięki czemu będziesz miał/a pewność, że wszystko wykonujesz z dbałością o każdy szczegół.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={{span: 7, order: 12}} className="offer-img align-self-center">
                        <Image src={offer6Img} fluid />
                    </Col>
                    <Col lg={{span: 5, order: 11}} className="offer-info pt-5 pb-5 align-self-center">
                        <h6 className="section-subtitle">trening</h6>
                        <h2 className="section-title">personalny</h2>
                        <h6 className="section-subtitle">z dojazdem do domu</h6>
                        <h3 className="offer-price">cena ustalana indywidualnie</h3>
                        <p className="offer-dscr">Jest to opcja skierowana dla osób, którym ciężko byłoby pogodzić obowiązki z dojazdami na siłownie lub po prostu chcą zacząć, jednak z jakiś powodów mają opór przed postawieniem pierwszego kroku na siłowni. Dzięki tej opcji masz możliwość skorzystania z treningów pod moim okiem, z dostarczonym przeze mnie sprzętem w Twoim domu. </p>
                    </Col>
                </Row>       
             </Container>
        </Row>
        <Row className="advantages-section p-4 pt-5">
            <Container>
                <h2 className="section-title">Dlaczego warto podjąć ze mną współpracę?</h2>
                <Row>
                    <Col md="6">
                        <Row>
                            <Col md="2">
                                Obrazek                                
                            </Col>
                            <Col>
                                <p>Zapewnię Ci wiedzę popartą praktyką i doświadczeniem.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                Obrazek                                
                            </Col>
                            <Col>
                                <p>Zadbam by każdy element treningu był dopasowany do Twoich możliwości i celu.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                Obrazek                                
                            </Col>
                            <Col>
                                <p>Pomogę Ci wyrobić długotrwałe nawyki żywieniowe i treningowe </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                Obrazek                                
                            </Col>
                            <Col>
                                <p>Nauczysz się jak komponować posiłki i nie mieć zbędnego stresu o dietę przed wyjściami czy wyjazdami.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="6">
                        <Row>
                            <Col md="2">
                                Obrazek                                
                            </Col>
                            <Col>
                                <p>Stale będę kontrolował Twoje postępy i wprowadzał zmiany, by osiągnąć jak najszybciej wymarzony cel.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                Obrazek                                
                            </Col>
                            <Col>
                                <p>Dostaniesz ode mnie wiele cennych wskazówek.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                Obrazek                                
                            </Col>
                            <Col>
                                <p>Gwarantuje Ci lepsze samopoczucie i satysfakcję.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="2">
                                Obrazek                                
                            </Col>
                            <Col>
                                <p>Pokaże Ci, że dieta i treningi to nie katorga, a coś co będziesz robić z przyjemnością.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Row> 
        <Row className="contact-section p-4 pt-5">
            <Container>
                <h2 className="section-title">Kontakt</h2>
                <div className="contact-button"></div>
                <div className="contact-button"></div>
                <Button className="contact-button" href="http://www.fb.com/kacperjanik" size="lg"></Button>
                <Button className="contact-button" href="http://www.instagram.com/kacperjanik" size="lg"></Button>
            </Container>
        </Row>
    </Container>
)