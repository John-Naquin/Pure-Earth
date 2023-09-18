import React from 'react';
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

export default function GrandIsle() {


    return (
        <body>
       
            <img
                src={fallbackImage}
                alt="Fallback Background"
                style={{ position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", objectFit: "cover" }}
            />
        
        {<center>
            <div className='container'>
                <center>
                    <div className="responsive-iframe"><iframe width="800" height="500" id="gmap_canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494297.8919578544!2d-94.06211870160678!3d31.20963773060577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86230af309d6efe7%3A0xf26d32819f8bd1d0!2sCypremort%20Point%20State%20Park!5e0!3m2!1sen!2sus!4v1682186268707!5m2!1sen!2sus"

                    ></iframe>
                    </div>
                </center>
                <div>
                    <a href="https://www.lastateparks.com/parks-preserves/grand-isle-state-park" className="profile-link">
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
            </div>
            <>
                <div className='container'>
                    <h2>Grand Isle State Parks</h2>
                    <p>
                    A beach ridge created by the action of the waves of the Gulf, Grand Isle serves as a breakwater between the Gulf and the network of inland channels that connect to the bayou tributaries of the Mississippi River. It is also the launching point for excellent deep-sea salt-water fishing adventures.
                    </p>
                </div>
             </>
        </center>}
        </body>
    );
}