import "../styles.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import linkedin_logo from "./images/linkedin_logo.png"
import React, {useEffect, useRef, useState} from "react";
import fallbackImage from "../images/phone.jpeg";

export default function About() {
    const [isAnimated, setIsAnimated] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            setIsAnimated(true);
        }
    }, []);

    return (
        <body>
        <img
            src={fallbackImage}
            alt="Fallback Background"
            style={{ position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover" }}
        />
        {<center>
            <Container>
                <Row>
                    <Col>
                        <p></p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className={isAnimated ? "animated-text animated" : "animated-text"} ref={textRef}>
                            <span>O</span>
                            <span>U</span>
                            <span>R</span>
                            <span> </span>
                            <span>T</span>
                            <span>E</span>
                            <span>A</span>
                            <span>M</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <img src={require('./images/john.jpg')}
                                 width="150"
                                 height="150" alt="John Naquin" />

                            <h2>John Naquin</h2>
                            <p>Computer Science</p>
                            <a href="https://www.linkedin.com/in/john-naquin/" class="profile-link">
                                <img src={linkedin_logo} alt="Profile Icon" class="profile-icon" />
                                LinkedIn
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <img src={require('./images/bradley.jpg')} width="150"
                                 height="150" alt="Bradley Prather" />
                            <h2>Bradley Prather</h2>
                            <p>Informatics</p>
                            <a href="https://www.linkedin.com/in/bradley-prather-363898228/" class="profile-link">
                                <img src={linkedin_logo} alt="Profile Icon" class="profile-icon" />
                                LinkedIn
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <img src={require('./images/devin.jpg')} width="150"
                                 height="150" alt="Devin Arton" />
                            <h2>Devin Arton</h2>
                            <p>Informatics</p>
                            <a href="https://www.linkedin.com/in/devin-arton-9147391b7/" class="profile-link">
                                <img src={linkedin_logo} alt="Profile Icon" class="profile-icon" />
                                LinkedIn
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <img src={require('./images/jada.jpg')} width="150"
                                 height="150" alt="Jada Braly" />
                            <h2>Jada Braly</h2>
                            <p>Computer Science</p>
                            <a href="https://www.linkedin.com/in/jada-braly-967030220/" class="profile-link">
                                <img src={linkedin_logo} alt="Profile Icon" class="profile-icon" />
                                LinkedIn
                            </a>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <div>
                            <img src={require('./images/owyn.jpg')} width="150"
                                 height="150" alt="Owyn Bradberry" />
                            <h2>Owyn Bradberry</h2>
                            <p>Informatics</p>
                            <a href="https://www.linkedin.com/in/owyn-bradberry-233633195/" class="profile-link">
                                <img src={linkedin_logo} alt="Profile Icon" class="profile-icon" />
                                LinkedIn
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </center>}
        </body>
            );

        }
