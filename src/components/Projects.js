import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import webdev1 from "../assets/img/UI-Activity-Classifier.png";
import webdev2 from "../assets/img/UI-Pic2Plate.png";
import game3 from "../assets/img/UI-Guessing-Game.png"
import game1 from "../assets/img/UI-Pacman.png";
import game2 from "../assets/img/UI-UNO.png";
import webdev4 from "../assets/img/UI-Tool-Sharing-App.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Donut from "./Donut";
import ruby from "../assets/img/Ruby-Poster.png";
import satoru from "../assets/img/Satoru.png";
import suguru from "../assets/img/Suguru.png";
import contempt from "../assets/img/Contempt.png";
import { ExperimentCard } from "./ExperimentCard";

export const Projects = () => {

 
  const project1 = [
    {
      id: "activity-classifier",
      title: "Activity Classifier App",
      description: "A machine learning-based app built with python that classifies physical activity using accelerometer data.",
      imgUrl: webdev1,
      repoUrl:"https://github.com/franz3715/Activity-Classifier-App.git",
      videoUrl: "https://youtu.be/jlks31bEHnM?si=9AAIVg6cs85WiPfe"
    },
    {
      id: "meal-planner",
      title: "Pic2Plate",
      description: "An app bulit with Python, Pytorch, Flask,that utilizes computer vision to identify food items and suggest meal plans.",
      imgUrl: webdev2,
      repoUrl:"https://github.com/franz3715/Pic2Plate.git",
      videoUrl: "https://youtu.be/UzsGZHKOLfU?si=5xMwW-VkR7zD18tw"
    },
    {
      id: "tool-sharing",
      title: "Tool Sharing App",
      description: "An App built with Flutter and Firebase that allows users to share and borrow tools from each other.",
      imgUrl: webdev4,
      repoUrl:"https://github.com/SoslyLW/essdev-app-team.git"
    },

  ];

  const project2 = [
    {
      id: "pacman-game",
      title: "Pacman",
      description: "A game made with C",
      imgUrl: game1,
      repoUrl:"https://github.com/franz3715/Pacman-Game.git"
    },
    {
      id: "uno-game",
      title: "UNO",
      description: "A game made with Java that allows you to play UNO with up to 4 players",
      imgUrl: game2,
      repoUrl:"https://github.com/franz3715/UNO-Game.git"
    },
    {
      id: "guessing-game",
      title: "Guess Master",
      description: "A game made with Java that allows you to guess the birthday of an entity",
      imgUrl: game3,
      repoUrl:"https://github.com/franz3715/Guessing-Game.git"
    },
  ]

  const experiments = [
  { id: "exp1", title: "Donut", description: "A rotating donut made with JavaScript", content:<Donut/> },
  { id: "exp2", title: "Ruby", description: "A poster inspired by the album Ruby by Jennie", 
    content: <img src={ruby} alt="Experiment 1" style={{ width: "100%", borderRadius: "8px" }} />},
  { id: "exp3", title: "Contempt", description: "A digital art created using procreate",
    content: <img src={contempt} alt="Experiment 2" style={{ width: "100%", borderRadius: "8px" }} />},
  { id: "exp4", title: "At Peace", description: "A digital art inspired by Jujutsu Kaisen Anime",
    content: <img src={suguru} alt="Experiment 3" style={{ width: "100%", borderRadius: "8px" }} />},
  { id: "exp5", title: "Touch of Light", description: "A digital art inspired by Jujutsu Kaisen Anime",
    content: <img src={satoru} alt="Experiment 4" style={{ width: "100%", borderRadius: "8px" }} />
  },
];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some stuff I've worked on</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">App Dev</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Games</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          project1.map((project) => {
                            return (
                              <Col key={project1.id} xs={12} className="mb-4">
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
                          project2.map((project) => {
                            return (
                              <Col key={project2.id} xs={12} className="mb-4">
                                <ProjectCard {...project} />
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Some things that I've created</p>
                      <Row className="mt-4">
                        {experiments.map((exp) => (
                          <Col key={exp.id} xs={12} className="mb-4">
                            <ExperimentCard {...exp} />
                          </Col>
                        ))}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background img"></img>
    </section>
  )
}