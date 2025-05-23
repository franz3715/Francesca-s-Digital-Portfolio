import pythonlogo from "../assets/img/python-logo.png";
import javalogo from "../assets/img/java-logo.png";
import clogo from "../assets/img/c-logo.png";
import assemblylogo from "../assets/img/assembly-logo.png";
import Carousel from 'react-multi-carousel';
import sqllogo from "../assets/img/sql-icon-logo.png";
import htmlcssjslogo from "../assets/img/html-css-js-logo.png";
import 'react-multi-carousel/lib/styles.css';

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
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                      <div className="skill-bx-inner">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={javalogo} alt="Java" />
                                <h5>Object Oriented Programming</h5>
                            </div>
                            <div className="item">
                                <img src={clogo} alt="C" />
                                <h5>Data Structures</h5>
                            </div>
                            <div className="item">
                                <img src={pythonlogo} alt="Python" />
                                <h5>Machine Learning</h5>
                            </div>
                            <div className="item">
                                <img src={assemblylogo} alt="Assembly" />
                                <h5>Low-level programming</h5>
                            </div>
                            <div className="item">
                                <img src={htmlcssjslogo} alt="UI" />
                                <h5>Front End</h5>
                            </div>
                            <div className="item">
                                <img src={sqllogo} alt="SQL" />
                                <h5>Database Management</h5>
                            </div>
                        </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}