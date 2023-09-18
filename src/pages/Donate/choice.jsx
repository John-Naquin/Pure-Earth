import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

function donate (x) {

    sessionStorage.setItem("money", x);
    if (x==500) {
        sessionStorage.setItem("dollar", "$5");
    }
    if (x==1000) {
        sessionStorage.setItem("dollar", "$10");
    }
    if (x==1500) {
        sessionStorage.setItem("dollar", "$15");
    }
    
}

export default function choice() {

    return (
            <body>
            
                <img
                    src={fallbackImage}
                    alt="Fallback Background"
                    style={{ position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover" }}
                />
        <center>
            <body>
            <Container>
                <h1 style={{ color: '#fff'}}>All donations go directly to the U.S. National Park Service</h1>
            </Container>

            <Container>
                <h1 style={{color: '#fff'}}>Donation</h1>
                <p>Please select the amount you would like to donate.</p>
                <Link to="/StripeApp">
                    <button onClick={() => donate(500)} className="donation-button">Donate $5</button>
                </Link>
                <Link to="/StripeApp">
                    <button onClick={() => donate(1000)} className="donation-button">Donate $10</button>
                </Link>
                <Link to="/StripeApp">
                    <button onClick={() => donate(1500)} className="donation-button">Donate $15</button>
                </Link>
            </Container>
            </body>
        </center>
        </body>

    );
}


