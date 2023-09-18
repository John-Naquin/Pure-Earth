import React from 'react';
import {Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

export default function Kisatchie() {

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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879376.5147789363!2d-96.41153950983846!3d31.455057888449605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86254cec9552e5a9%3A0x19d3479888baea39!2sKisatchie%20National%20Forest!5e0!3m2!1sen!2sus!4v1677703752572!5m2!1sen!2sus"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">
                    </iframe>
                    </div>
                </center>
                <div>
                    <a href="https://www.fs.usda.gov/kisatchie" className="profile-link">
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
                    <h2>Kisatchie National Forest</h2>
                    <p>
                        Kisatchie National Forest is a beautiful natural oasis located in central Louisiana. It spans over 600,000 acres and contains a diverse range of ecosystems, including upland pine forests, bottomland hardwood forests, and swamps. The forest is home to an abundance of wildlife, including black bears, white-tailed deer, and wild turkeys, making it a popular destination for outdoor enthusiasts and nature lovers. Visitors can enjoy a variety of recreational activities, such as hiking, camping, fishing, and hunting. With its stunning landscapes and rich biodiversity, Kisatchie National Forest offers a unique and memorable experience for all who visit.
                    </p>
                </div>
             </>
        </center>}
        </body>
    );
}
