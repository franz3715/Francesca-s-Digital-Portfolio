import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import webdev1 from "../assets/img/UI-Activity-Classifier.png";
import webdev2 from "../assets/img/UI-pic2plate.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Donut from "./Donut";
import MagicCursor from "./MagicCursor";

export const Projects = () => {

 
  const projects = [
    {
      id: "activity-classifier",
      title: "Activity Classifier App",
      description: "A machine learning-based app that classifies physical activity using accelerometer data.",
      imgUrl: webdev1,
    },
    {
      id: "meal-planner",
      title: "Meal Planning App",
      description: "An app that utilizes computer vision to identify food items and suggest meal plans.",
      imgUrl: webdev2,
    },
    {
      id: "computer-vision",
      title: "Computer Vision System",
      description: "A system that uses computer vision to detect and classify objects in real-time.",
      imgUrl: projImg3,
    },
    {
      id: "tool-sharing",
      title: "Tool Sharing App",
      description: "An App that allows users to share and borrow tools from each other.",
      imgUrl: projImg1,
    },

  ];

  const project2 = [
    {
      id: "pacman-game",
      title: "Pacman Game",
      description: "A machine learning-based app that classifies physical activity using accelerometer data.",
      imgUrl: projImg1,
    },
    {
      id: "uno-game",
      title: "UNO Game",
      description: "An app that utilizes computer vision to identify food items and suggest meal plans.",
      imgUrl: projImg2,
    },
    {
      id: "guessing-game",
      title: "Guessing Game",
      description: "A system that uses computer vision to detect and classify objects in real-time.",
      imgUrl: projImg3,
    },

  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some stuff I've worked on in the past two years</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experiments</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Col key={index} xs={12} sm={6} md={6}>
                                <ProjectCard {...project} />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          project2.map((project, index) => {
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
                    <Tab.Pane eventKey="third">
                      <p>Just some stuff i found interesting</p>
                      <Donut/>
                      <MagicCursor/>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}