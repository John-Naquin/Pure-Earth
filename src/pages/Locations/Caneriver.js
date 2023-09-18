import React from 'react';
import {Link} from "react-router-dom";

import {Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

export default function Caneriver() {

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
                        <iframe id="gmap_canvas"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1963089.9849872957!2d-92.60510158060254!3d31.113932553421346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8630786278a51947%3A0xe6c464c58210b742!2sCane%20River%20Creole%20National%20Historical%20Park!5e0!3m2!1sen!2sus!4v1678236633710!5m2!1sen!2sus"
                                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" allowFullScreen>
                        </iframe>
                    </div>
                </center>
                <div>
                    <a href="https://www.nps.gov/cari/index.htm" className="profile-link">
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
                    <h2>Cane River Creole National Forest</h2>
                    <p>
                    The Cane River region is home to a unique culture; the Creoles. Generations of the same families of owners and workers, enslaved and tenant, lived on these lands for over 200 years. The park tells their stories and preserves the cultural landscape of Oakland and Magnolia Plantations, two of the most intact Creole cotton plantations in the United States.
                    </p>
                </div>
             </>
        </center>}
        </body>
    );
}