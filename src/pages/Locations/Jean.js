import React from 'react';
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

export default function Jean() {

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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d443120.1428294454!2d-90.694004934375!3d29.8101232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8620987dc71e1ceb%3A0xc5b718ea2fe319b2!2sJean%20Lafitte%20National%20Historical%20Park%20and%20Preserve!5e0!3m2!1sen!2sus!4v1677703582128!5m2!1sen!2sus"
                        frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                </iframe>
                </div>
            </center>
            <div>
                <a href="https://www.nps.gov/jela/index.htm" className="profile-link">
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
            <center>

                <h2>Jean Lafitte</h2>
                <p>
                    Jean Lafitte National Historical Park and Preserve is a protected area located in southern Louisiana, United States. It is named after the French pirate and privateer Jean Lafitte who operated in the Gulf of Mexico and who helped defend New Orleans from the British during the War of 1812. The park consists of six sites spread across southern Louisiana, each of which tells a unique story about the region's rich cultural and natural history. Visitors can explore historic sites, walk along nature trails, view wildlife, and learn about the park's rich history and heritage.
                </p>
            </center>
        </div>

            </>
        </center>}
        </body>


    );
}
