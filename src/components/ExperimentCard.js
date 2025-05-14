import PropTypes from "prop-types";

export const ExperimentCard = ({ title, description, content }) => {
  return (
    <div className="experiment-card-wrapper">
      <div className="experiment-content">
        {content}
      </div>
      <div className="experiment-text">
        {<h4>{title}</h4>}
        {<p>{description}</p>}
      </div>
    </div>
  );
};

ExperimentCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.node.isRequired, // e.g. <Donut />, <img />, etc.
};
