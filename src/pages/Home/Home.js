import "../styles.css"
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from 'react-bootstrap';
import React, {useRef, useState } from "react";
import {Link} from "react-router-dom";
import fallbackImage from "../images/phone.jpeg";
export default function Home() {


    const [isAnimated, setIsAnimated] = useState(false);
    const textRef = useRef(null);



    return (
        <body>
    
            <img
                src={fallbackImage}
                alt="Fallback Background"
                style={{ position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover" }}
            />
    
        {<div>
            <center>
                    <div className="logo-row">
                        <img src={require('./images/logo.png')} />
                </div>
                <Container>
                    <Row>
                        <Col>
                        <div>
                            <div className={isAnimated ? "animated-text animated" : "animated-text"} ref={textRef}>
                                <span>W</span>
                                <span>E</span>
                                <span>L</span>
                                <span>C</span>
                                <span>O</span>
                                <span>M</span>
                                <span>E</span>
                            </div>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <p>
                            Welcome to our website! We are thrilled
                            to have you here and hope that you will find
                            everything you need. Our website is designed to be
                            user-friendly, informative, and easy to navigate. Whether
                            you are looking for information about national parks, volunteer
                            opportunities, or ways to donate, you have come to the right place.
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                    <Link to="/parks">
                        <button style={{
                            backgroundColor: '#4c7d8a',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontSize: '1.2rem',
                            textDecoration: 'none',
                            cursor: 'pointer'
                        }}>Lets Go Explore!</button>
                    </Link>
                        </Col>
                    </Row>
                </Container>
        </center>
        </div>}
        </body>
    );
}


