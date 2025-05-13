import './ActivityClassifier.css';
import img from '../../assets/img/UI-Activity-Classifier.png';

export default function ActivityClassifier() {
  return (
    <div className="activity-page" style={{ padding: "2rem" }}>
      <h2>Activity Classifier App</h2>
      <img src={img} alt="Activity Classifier" style={{ maxWidth: "100%" }} />
      <p>This app uses machine learning to classify physical activity based on accelerometer data. It is built with:</p>
      <ul>
        <li>Python</li>
        <li>scikit-learn</li>
        <li>Tkinter</li>
      </ul>
    </div>
  );
}
