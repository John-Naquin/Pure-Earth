import React from 'react';
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

export default function CypremorePoint() {
   
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d887255.4127958746!2d-92.1302769493061!3d29.695375922521762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86230af309d6efe7%3A0xf26d32819f8bd1d0!2sCypremort%20Point%20State%20Park!5e0!3m2!1sen!2sus!4v1682185955097!5m2!1sen!2sus"
                        ></iframe>
                    </div>
                </center>
                <div>
                    <a href="https://www.lastateparks.com/parks-preserves/cypremort-point-state-park" className="profile-link">
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
                    <h2>Cypremort Point State Park</h2>
                    <p>
                    Between Grand Isle and Cameron, Cypremort Point is one of the very few locations near the Gulf of Mexico that can be reached by car. A half-mile stretch of a man-made beach provides a delightful area for relaxing, picnicking and enjoying the water. It also affords an opportunity for fishing, crabbing, water skiing, windsurfing and, of course, sailing.

                    A boat launch just outside the park's entrance is only a few miles from the Gulf of Mexico, and fishermen can venture out to fish in the Gulf or Vermilion Bay. Catches of flounder and redfish are not uncommon in the area. For those interested in fishing from the shore, a 100-foot fishing pier is situated on the Bay. Overnight visitors also have access to adjacent boat docks and a fish cleaning station.

                    In addition to excellent sailing and swimming facilities, the 185-acre park also holds a special attraction for nature enthusiasts. Located in the heart of a Louisiana marsh, the site contains an abundance of wildlife. The quiet observer may happen upon nutria, muskrat, alligator or a number of bird species native to the state. Deer, black bear, rabbits, opossum and red fox also make their home in this area, so stay aware of your surroundings and you may discover more of the natural charm of Cypremort Point.

                    Find nearby things to do.
                    </p>
                </div>
             </>
        </center>}
        </body>
    );
}