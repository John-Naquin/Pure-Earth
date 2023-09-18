import React, {useEffect, useRef, useState} from 'react';
import OpenAI from 'openai-api';
import "../styles.css"
import {Col, Container, Row} from "react-bootstrap";
import fallbackImage from "../images/phone.jpeg";

const openai = new OpenAI(process.env.REACT_APP_OPENAI_API_KEY);

function Questions() {
    const [isAnimated, setIsAnimated] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            setIsAnimated(true);
        }
    }, []);

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

  

    const handleSubmit = async (e) => {
        e.preventDefault();
        const prompt = `Q: ${question}\nA:`;
        try {
            const completions = await openai.complete({
                engine: 'text-davinci-003',
                prompt,
                maxTokens: 1024,
                n: 1,
                stop: ['\n'],
                temperature: 0.1,
            });
            const responseData = completions.data;
            const response = responseData.choices[0].text.trim();
            setAnswer(response);
        } catch (err) {
            console.log(err);
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
                    <div>
                        <div
                            className={
                                isAnimated ? 'animated-text animated' : 'animated-text'
                            }
                            ref={textRef}
                        >
                            <span>Q</span>
                            <span>U</span>
                            <span>E</span>
                            <span>S</span>
                            <span>T</span>
                            <span>I</span>
                            <span>O</span>
                            <span>N</span>
                            <span>S</span>
                        </div>
                    </div>
                    <p>
                        Ask any question you may have about a national park! Please be
                        respectful and do not ask any questions that may be offensive.
                    </p>
                </Container>
                <Container>
                    <Row>
                        <form onSubmit={handleSubmit}>
                            <label>
                                <p>Ask me a Question!</p>
                                <br />
                                <input
                                    type="text"
                                    value={question}
                                    onChange={(e) => setQuestion(e.target.value)}
                                    style={{ width: "100%" }}
                                />
                            </label>
                            <Col>
                                <center>
                                    <button type="submit">Submit</button>
                                </center>
                            </Col>
                        </form>
                    </Row>
                </Container>
            </center>
        }
        <center>
            <Container>
                <p>Answer: {answer}</p>
            </Container>
        </center>
        </body>
    );
}

export default Questions;
