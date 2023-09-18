import React from 'react';
import {Link} from "react-router-dom";
import {Container, Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

export default function Atchafalaya() {


    return (
        <body>
       
            <img
                src={fallbackImage}
                alt="Fallback Background"
                style={{ position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover" }}
            />
        
        {<center>
            <Container>
                <center>
                    <div className="responsive-iframe"><iframe width="800" height="500" id="gmap_canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442017.1045549597!2d-91.8448489003112!3d30.058120245396054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862472d41d83626b%3A0xb0143c145de718db!2sAtchafalaya%20National%20Heritage%20Area!5e0!3m2!1sen!2sus!4v1682184888725!5m2!1sen!2sus"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
                    </div>
                </center>
                <div>
                    <a href="https://www.atchafalaya.org" className="profile-link">
                        Official Website for the Park
                    </a>
                </div>
                <center>
                    <Row>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%'
                        }}>
                            <Link to="/volunteer">
                                <button style={{
                                    backgroundColor: '#4c7d8a',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '5px',
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    flex: 1,
                                    width: '120px',
                                    height: '40px',
                                    marginRight: '10px'
                                }}>Volunteer</button>
                            </Link>
                            <Link to="/donate">
                                <button style={{
                                    backgroundColor: '#4c7d8a',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: '5px',
                                    fontSize: '1rem',
                                    textDecoration: 'none',
                                    cursor: 'pointer',
                                    flex: 1,
                                    width: '120px',
                                    height: '40px',
                                    marginLeft: '10px'
                                }}>Donate</button>
                            </Link>
                        </div>
                    </Row>
                </center>
            </Container>
                <Container>
                    <h2>Atchafalaya National Heritage Area</h2>
                    <p>
                    Deep in Americas South, there is a rich and mysterious country filled with twisting bayous, backwater lakes, vast marshes and the nation's largest river swamp. Established in 2006, the Atchafalaya National Heritage Area (NHA) stretches across 14 parishes in south-central Louisiana. It is among the most culturally rich and ecologically varied regions in the United States, home to the widely recognized Cajun culture as well as a diverse population of European, African, Caribbean and Native-American descent.
                    </p>
                </Container>
        </center>}
        </body>
    );
}