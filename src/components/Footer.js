import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/email-icon.svg";
import navIcon3 from "../assets/img/nav-icon4.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/francesca-adaobi-emeka-joseph-92b016205"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:francescaadaobiemeka@gmail.com"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://github.com/franz3715"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>A Website made by Francesca Adaobi Emeka Joseph</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}