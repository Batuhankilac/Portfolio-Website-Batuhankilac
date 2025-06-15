import { Carousel, CarouselCaption, CarouselItem, Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/c-sharp.png";
import meter2 from "../assets/img/unity-logo.png";
import meter3 from "../assets/img/python-logo.png";
import meter4 from "../assets/img/blender-logo.svg";
import colorSharp from "../assets/img/solgörsel.png";

export const Skills = () => {
    const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
    };

    return (
        <section className="skill" id="skills">
            <Container>    
                <Row>   
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Here are some of the skills I have acquired over my journey as a computer engineer.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <CarouselItem>
                                <div className="item">
                                    <img src={meter1} alt="C#" />
                                    <CarouselCaption>
                                    <h5>Backend Engineering with C#</h5>
                                    </CarouselCaption>
                                </div>
                                </CarouselItem>
                                
                                <CarouselItem>
                                <div className="item">
                                    <img src={meter2} alt="Unity" />
                                    <CarouselCaption>
                                    <h5>Game Development with Unity</h5>
                                    </CarouselCaption>
                                </div>
                                </CarouselItem>

                                <CarouselItem>
                                <div className="item">
                                    <img src={meter3} alt="Python" />
                                    <CarouselCaption>
                                    <h5>Neural Networks, Machine Learning Processes and Data Science with Ptyhon</h5>
                                    </CarouselCaption>
                                </div>
                                </CarouselItem>

                                <CarouselItem>
                                <div className="item">
                                    <img src={meter4} alt="Blender" />
                                    <CarouselCaption>
                                    <h5>Animation and Model Design with Blender</h5>
                                    </CarouselCaption>
                                </div> 
                                </CarouselItem>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="Background" />
        </section>
    );
}