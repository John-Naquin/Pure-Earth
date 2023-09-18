import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useRef, useState} from 'react';
import axios from 'axios';
import '../styles.css';
import {Col, Container, Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

function Signup() {
    const [isAnimated, setIsAnimated] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            setIsAnimated(true);
        }
    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [UserReward, setUserReward] = useState('');



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email === '' || password === '') {
            toast.error('Please fill out all fields');
            return;
        }

        if (password.length < 6) {
            toast.error('Password must be at least 6 characters long.');
            return;
        }

        const user = {
            email,
            password,
            UserReward,
        };

        axios.post('https://pure-backend.onrender.com/app/signup', user)
            .then((response) => {
                console.log(response);
                setUserReward(100);
                toast.success('Signup successful!');
            })
            .catch((error) => {
                console.log(error);
                if (error.response.status === 400) {
                    toast.error('Email already exists. Please try another one.');
                } else if (error.response.status === 402) {
                    toast.error('Password must be at least 6 characters long.');
                } else {
                    toast.error('An error occurred while processing the request');
                }
            });
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
                        <span>S</span>
                        <span>I</span>
                        <span>G</span>
                        <span>N</span>
                        <span> </span>
                        <span>U</span>
                        <span>P</span>
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
                        <label htmlFor="password" style={{ color: 'white' }}>Password</label>
                        </Col>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    </Col>
                    <Col>
                        <center>
                    <button type="submit">Sign Up</button>
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

export default Signup;
