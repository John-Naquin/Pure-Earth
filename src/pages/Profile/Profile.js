import React, {useContext, useEffect, useRef, useState} from 'react';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import fallbackImage from "../images/phone.jpeg";

function Profile() {

    const [isAnimated, setIsAnimated] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            setIsAnimated(true);
        }
    }, []);

    const {
        userEmail,
        setUserEmail,
        setLoggedIn,
        UserReward,
        profilePicture,
        setProfilePicture,
    } = useContext(UserContext);

    const navigate = useNavigate();

    const handleLogout = () => {
        setUserEmail('');
        setLoggedIn(false);
        setProfilePicture('https://via.placeholder.com/150')
        localStorage.removeItem('userEmail');
        navigate('/login');
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            const img = new Image();
            img.src = URL.createObjectURL(file);

            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = 250;
                canvas.height = 250;
                const ctx = canvas.getContext('2d');

                ctx.drawImage(img, 0, 0, 250, 250);

                const resizedImageUrl = canvas.toDataURL();

                setProfilePicture(resizedImageUrl);
                localStorage.setItem('profilePicture', resizedImageUrl);
            };
        }
    };


    return (
        <body>
       
            <img
                src={fallbackImage}
                alt="Fallback Background"
                style={{ position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover" }}
            />
        {
        <center>
            <Container>
                <center>
                    <div>
                        <div className={isAnimated ? "animated-text animated" : "animated-text"} ref={textRef}>
                            <span>P</span>
                            <span>R</span>
                            <span>O</span>
                            <span>F</span>
                            <span>I</span>
                            <span>L</span>
                            <span>E</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <img
                            src={profilePicture}
                            alt="User Profile"
                            style={{
                                borderRadius: '50%',
                                width: '150px',
                                height: '150px',
                                objectFit: 'cover',
                            }}
                        />
                        <input
                            type="file"
                            id="fileInput"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="fileInput" style={{ cursor: 'pointer', marginTop: '10px'}}>
                            Change Profile Picture
                        </label>
                    </div>

                </center>
                <div>
                    <p>Email: {userEmail}</p>
                    <p>User Reward: {UserReward}</p>
                    <button
                        style={{
                            backgroundColor: '#4c7d8a',
                            color: '#fff',
                            border: 'none',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            fontSize: '1.2rem',
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                        onClick={handleLogout}
                    >
                        Log out
                    </button>
                </div>
            </Container>
        </center>}
        </body>
    );
}

export default Profile;
