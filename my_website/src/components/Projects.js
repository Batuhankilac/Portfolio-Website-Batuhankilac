import { Col, Container, TabContainer, TabContent, Row, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
    const projects = [
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
             title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
             title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
             title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
             title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
             title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                    <p>Here are some of the projects I have worked on during my career as a software developer.</p>
                    </div>}
                    </TrackVisibility>
                    <TabContainer id="projects-tabs" defaultActiveKey="first">
                    
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">
                            Tab Three
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                        <TabContent>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })   
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <p>Content for Tab Two</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <p>Content for Tab Three</p>
                            </Tab.Pane>
                        </TabContent>
                        </TabContainer>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
