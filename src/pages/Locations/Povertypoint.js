import React from 'react';
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

export default function Povertypoint() {


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
                    <div className="responsive-iframe">
                    <iframe width="800" height="500" id="gmap_canvas"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1946223.083663495!2d-93.56224948339172!3d31.920184555595693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x862edd1cb7915c33%3A0x632da91b3fae40b6!2sPoverty%20Point%20Reservoir%20State%20Park!5e0!3m2!1sen!2sus!4v1678237003660!5m2!1sen!2sus"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
                    </div>
                </center>
                <div>
                    <a href="https://www.nps.gov/popo/index.htm" className="profile-link">
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
                    <h2>Poverty Point Reservoir State Park</h2>
                    <p>
                    Now a nearly forgotten culture, Poverty Point at its peak 3,000 years ago was part of an enormous trading network that stretched for hundreds of miles across the continent. It was - and is - also an engineering marvel, the product of five million hours of labor. Explore the culture of a highly sophisticated people who left behind one of North America’s most important archeological sites.
                    </p>
                </div>
             </>
        </center>}
        </body>
    );
}
