import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useEffect, useRef, useState} from 'react';
import { useContext } from 'react';
import UserContext from '../UserContext';
import axios from 'axios';
import Profile from '../Profile/Profile';
import { useNavigate } from 'react-router-dom';
import {Col, Container, Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

function Login() {
    const [isAnimated, setIsAnimated] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            setIsAnimated(true);
        }
    }, []);

    const { setUserEmail, loggedIn, setLoggedIn, setProfilePicture } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();



    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(email === '' || password === '') {
            toast.error('Please fill out all fields');
        }

        const user = {
            email,
            password
        };

        try {
            const response = await axios.post('https://pure-backend.onrender.com/app/login', user);

            if (response.status === 200) {
                setProfilePicture('https://via.placeholder.com/150')
                setUserEmail(email);
                setLoggedIn(true);
                localStorage.setItem('userEmail', email);
                navigate('/profile');

            } else {
                toast.error('Invalid email or password');
            }
        } catch (error) {
            toast.error('Invalid email or password');
        }
    };

    return loggedIn ? (
        <Profile />
    ) : (
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
                        <span>L</span>
                        <span>O</span>
                        <span>G</span>
                        <span>I</span>
                        <span>N</span>
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
                    <button type="submit">Log in</button>
                        </center>
                    </Col>
                    <div>
                        <a href="https://pure-backend.onrender.com/signup" style={{ color: 'seashell' }}>
                            Don't have an account? Sign up here!
                        </a>
                    </div>
                    <ToastContainer />
                </form>
                </Row>
            </Container>
        </center>}
        </body>
    );
}

export default Login;