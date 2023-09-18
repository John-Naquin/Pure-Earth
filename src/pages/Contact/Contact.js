import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import '../styles.css'
import {Col, Container, Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";


export default function Contact() {
    const [isAnimated, setIsAnimated] = useState(false);
    const textRef = useRef(null);


    useEffect(() => {
        if (textRef.current) {
            setIsAnimated(true);
        }
    }, []);

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {

        if(email === '' || message === '') {
            event.preventDefault();
            toast.error('Please fill out all fields');
        }

        if(email !== '' && message !== '') {
            event.preventDefault();
            toast.success('Message has been sent!');
        }

        const user = {
            email,
            message
        };

        try {
            const response = await axios.post('https://pure-backend.onrender.com/app/contact', user);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };


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
            <form onSubmit={handleSubmit}>
                <div className={isAnimated ? "animated-text animated" : "animated-text"} ref={textRef}>
                    <span>C</span>
                    <span>O</span>
                    <span>N</span>
                    <span>T</span>
                    <span>A</span>
                    <span>C</span>
                    <span>T</span>
                </div>
                <Col>
                <div>
                    <Col>
                    <label htmlFor="email" style={{ color: 'white' }}>Email</label>
                    </Col>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                </Col>
                <Col>
                <div>
                    <Col>
                    <label htmlFor="message" style={{ color: 'white' }}>Message</label>
                    </Col>
                    <textarea
                        className="message-input"
                        id="message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />

                </div>
                </Col>
                <Col>
                    <center>
                <button type="submit">Send Message</button>
                    </center>
                </Col>
                <ToastContainer />
            </form>
                </Row>
            </Container>
        </center>}
        </body>
    );
}
