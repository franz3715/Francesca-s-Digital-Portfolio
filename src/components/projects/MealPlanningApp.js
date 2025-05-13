import './MealPlanningApp.css';
import img from '../../assets/img/UI-pic2plate.png';

export default function ActivityClassifier() {
  return (
    <div className="pic2plate-page" style={{ padding: "2rem" }}>
      <h2>Pic2Plate</h2>
      <img src={img} alt="Pic2Plate" style={{ maxWidth: "100%" }} />
      <p>This app enables user to take pictures of their ingredients and generate the appropriate recipes based on them</p>
      <ul>
        <li>Python</li>
        <li>Flask</li>
        <li>OpenCV</li>
        <li>TensorFlow</li>
        <li>HTML,CSS,JavaScript</li>
      </ul>
    </div>
  );
}
