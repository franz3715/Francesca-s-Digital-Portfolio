import PropTypes from "prop-types";

export const ProjectCard2 = ({ title, description, imgUrl, repoUrl, videoUrl, slideUrl }) => {
  return (
    <div className="project2-card-wrapper">
      {imgUrl && <img src={imgUrl} alt={title} className="project-img" />}
      <div className="proj-txtx">
        <h4>{title}</h4>
        <p>{description}</p>
        
        {(repoUrl || videoUrl || slideUrl) && (
          <div className="project-links">
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {videoUrl && (
              <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                Video Demo
              </a>
            )}
            {slideUrl && (
              <a href={slideUrl} target="_blank" rel="noopener noreferrer">
                Slides
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

ProjectCard2.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string,
  repoUrl: PropTypes.string,
  videoUrl: PropTypes.string,
  slideUrl: PropTypes.string,
};
