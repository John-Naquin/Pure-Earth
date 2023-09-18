import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

function Volunteer() {
    const [isAnimated, setIsAnimated] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            setIsAnimated(true);
        }
    }, []);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [selectedPark, setSelectedPark] = useState("");

    const handleParkSelect = (e) => {
        setSelectedPark(e.target.value);
    };

    useEffect(() => {
        const fetchAvailableDates = async () => {
            if (!selectedPark) return;

            try {
                const response = await axios.get(
                    `https://pure-backend.onrender.com/app/available-dates?park=${selectedPark}`
                );
                setAvailableDates(response.data);
            } catch (error) {
                console.error("Error fetching available dates:", error);
            }
        };

        fetchAvailableDates();
    }, [selectedPark]);

    const [availableDates, setAvailableDates] = useState([]);
    const [selectedSlotId, setSelectedSlotId] = useState(null);

    


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            formData.firstName === "" ||
            formData.lastName === "" ||
            formData.email === "" ||
            formData.phone === "" ||
            selectedSlotId === null
        ) {
            toast.error("Please fill out all fields and select a slot");
            return;
        }

        try {
            const response = await axios.post("https://pure-backend.onrender.com/app/volunteer", {
                ...formData,
                slotId: selectedSlotId,
            });
            console.log(response);
            toast.success("Volunteer registration submitted successfully");
        } catch (error) {
            console.log(error);
            toast.error("An error occurred while submitting the form. Please try again later.");
        }
    };

    const renderAvailableDates = () => {
        return availableDates.map((availableDate, index) => {
            return (
                <div key={index}>
                    <h3>{new Date(availableDate.date).toLocaleDateString()}</h3>
                    <ul className="volunteer">
                        {availableDate.slots.map((slot, idx) => {
                            if (!slot.isTaken) {
                                return (
                                    <li
                                        key={idx}
                                        onClick={() => setSelectedSlotId(slot._id)}
                                        className={slot._id === selectedSlotId ? "selected-slot" : "volunteer"}
                                    >
                                        {slot.startTime} - {slot.endTime}
                                    </li>
                                );
                            } else {
                                return (
                                    <li key={idx} className="taken">
                                        {slot.startTime} - {slot.endTime} (Taken)
                                    </li>
                                );
                            }
                        })}
                    </ul>
                </div>
            );
        });
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
                    <Row>
                    <form onSubmit={handleSubmit}>
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
                        </div>
                        <Col>
                        <div>
                            <Col>
                            <label htmlFor="firstName" style={{ color: 'white' }}>First Name</label>
                            </Col>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <Col>
                            <label htmlFor="lastName" style={{ color: 'white' }}>Last Name</label>
                            </Col>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <Col>
                            <label htmlFor="email" style={{ color: 'white' }}>Email</label>
                            </Col>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <Col>
                            <label htmlFor="phone" style={{ color: 'white' }}>Phone</label>
                            </Col>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        </Col>
                        <Col>
                        <div>
                            <Col>
                            <label htmlFor="park" style={{ color: 'white' }}>Park</label>
                            </Col>
                            <select
                                name="park"
                                id="park"
                                value={selectedPark}
                                onChange={handleParkSelect}
                                required
                                style={{ width: '100%', maxWidth: '400px' }}
                            >
                                <option value="">Select a park</option>
                                <option value="Jean Lafitte National Historical Park and Preserve">Jean Lafitte National Historical Park and Preserve</option>
                                <option value="Kisatchie National Forest">Kisatchie National Forest</option>
                                <option value="Cane River Creole National Forest">Cane River Creole National Forest</option>
                                <option value="Poverty Point Reservoir State Park">Poverty Point Reservoir State Park</option>
                                <option value="Atchafalaya">Atchafalaya National Heritage Area</option>
                                <option value="CypremorePoint">Cypremort Point State Park</option>
                                <option value="Grand Isle">Grand Isle</option>
                                <option value="New Orleans Jazz">New Orleans Jazz National Park</option>
                            </select>
                        </div>
                        </Col>
                        {selectedPark && (
                            <Col>
                                <center>
                            <div>
                                <label htmlFor="date" style={{ fontSize: "1.75rem", paddingTop: "30px", color: 'white'}}>
                                    Date and Time Slot
                                </label>
                                {renderAvailableDates()}
                            </div>
                                </center>
                            </Col>
                        )}
                        <Col>
                            <center>
                        <button type="submit" >Submit</button>
                            </center>
                        </Col>
                        <ToastContainer />
                    </form>
                    </Row>
                </Container>
            </center>
        }
        </body>
    );
}

export default Volunteer;
