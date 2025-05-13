import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import React, { useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import ActivityClassifier from './components/projects/ActivityClassifier';
import MealPlanningApp from './components/projects/MealPlanningApp';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Skills />
              <Projects />
              <Contact />
            </>
          }
        />
          <Route path="/projects/activity-classifier" element={<ActivityClassifier />} />
          <Route path="/projects/meal-planner" element={<MealPlanningApp />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;


