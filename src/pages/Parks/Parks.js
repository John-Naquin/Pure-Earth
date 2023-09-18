import '../styles.css'
import Dropdown from 'react-bootstrap/Dropdown';
import { Container, Row, Col} from "react-bootstrap";
import React, { useEffect, useRef, useState } from "react";
import fallbackImage from "../images/phone.jpeg";


function Parks() {
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
                    <Col xs={12} md={6}>
                    <div>
                            <div className={isAnimated ? "animated-text animated" : "animated-text"} ref={textRef}>
                                <span>D</span>
                                <span>O</span>
                                <span>N</span>
                                <span>A</span>
                                <span>T</span>
                                <span>I</span>
                                <span>O</span>
                                <span>N</span>
                                <span>S</span>
                            </div>
                        </div>
                        <p>
                            National parks are a treasure for all of us to enjoy, but they require
                            resources to maintain and protect them for future generations. One way
                            you can help support national parks is by making a donation. Your donation
                            can help fund projects such as repairing trails, protecting endangered species,
                            or preserving historical landmarks.
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                    <div>
                            <div className={isAnimated ? "animated-text animated" : "animated-text"} ref={textRef}>
                                <span>V</span>
                                <span>O</span>
                                <span>L</span>
                                <span>U</span>
                                <span>N</span>
                                <span>T</span>
                                <span>E</span>
                                <span>E</span>
                                <span>R</span>
                                <span>I</span>
                                <span>N</span>
                                <span>G</span>
                            </div>
                        </div>
                        <p>
                            Volunteering at national parks is a wonderful way to give back to the environment,
                            make a positive impact, and gain valuable experience. National parks rely on the
                            help of volunteers to assist with a wide variety of tasks. By volunteering, you can become an important
                            part of the effort to protect and preserve these natural wonders for future generations.
                        </p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs={12} md={6}>
                    <div>
                            <div className={isAnimated ? "animated-text animated" : "animated-text"} ref={textRef}>
                                <span>L</span>
                                <span>E</span>
                                <span>A</span>
                                <span>R</span>
                                <span>N</span>
                                <span>I</span>
                                <span>N</span>
                                <span>G</span>
                            </div>
                        </div>
                        <p>
                            There is so much to learn about national parks! These natural wonders are home to diverse
                            ecosystems, unique wildlife, and fascinating geological formations. Whether you are a
                            student, a nature enthusiast, or simply curious, there are many resources available
                            to help you learn more about national parks.
                        </p>
                    </Col>
                </Row>
                <div>
                    <center>
                        <Dropdown>
                            <Dropdown.Toggle style={{
                                backgroundColor: '#4c7d8a',
                                color: '#fff',
                                border: 'none',
                                padding: '10px 20px',
                                borderRadius: '5px',
                                fontSize: '1.2rem',
                                textDecoration: 'none',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }} id="dropdown-basic">
                                <span className="button-text">Choose A Park</span>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/jean">Jean Lafitte National Historical Park and Preserve</Dropdown.Item>
                                <Dropdown.Item href="/kisatchie">Kisatchie National Forest</Dropdown.Item>
                                <Dropdown.Item href="/caneriver">Cane River Creole National Forest</Dropdown.Item>
                                <Dropdown.Item href="/povertypoint">Poverty Point Reservoir State Park</Dropdown.Item>
                                <Dropdown.Item href="/atchafalaya">Atchafalaya National Heritage Area</Dropdown.Item>
                                <Dropdown.Item href="/cypremorepoint">Cypremort Point State Park</Dropdown.Item>
                                <Dropdown.Item href="/grandisle">Grand Isle</Dropdown.Item>
                                <Dropdown.Item href="/neworleansjazz">New Orleans Jazz National Park</Dropdown.Item>



                            </Dropdown.Menu>
                        </Dropdown>
                    </center>
                </div>

            </Container>
        </center>}
        </body>





    );
}

export default Parks;