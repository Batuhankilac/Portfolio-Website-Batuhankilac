import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/undraw_welcome-aboard.svg" // Make sure to replace with your actual image path
import "animate.css";
import TrackVisibility from "react-on-screen";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const toRotate = ["Computer Engineer", "Software Developer", "Game Developer"];
    const [delta, setDelta] = useState(200 - Math.random() * 100);
    const period = 2000; // Adjust the typing speed

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta); // Adjust the typing speed

        return () => { clearInterval(ticker) };
    }, [text])


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(350); // Reset typing speed when starting a new word
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) => 
                    <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                        <span className="tagline" >Welcome to my Portfolio</span>
                        <h1>Hi! I'm Batuhan, I am a<span className="wrap"> {text}</span></h1>
                        <p>I'm a passionate software developer with a focus on creating innovative solutions. I love coding and am always eager to learn new technologies.</p>
                        <button onClick={() => console.log('connect')} className="vvd"><span>Let's Connect <ArrowRightCircle size={25}/> </span></button>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt=" Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
}