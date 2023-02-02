import React, { useState } from "react";
import Navbar from "../home/components/Navbar";
import { useLocation } from "react-router";
import WorkoutExercises from "./WorkoutExercises";

const Workout = () => {
  const [exerciseArray, setExercises] = useState([
    [
      0.46969949751866613,
      [
        ["Bench press", "3", "8-10"],
        ["Barbell rows", "3", "8-10"],
        ["Chest flyes", "4", "10-12"],
        ["Lat pulldowns", "4", "10-12"],
        ["Machine row", "3", "10-12"],
      ],
    ],
    [
      0.38844178397623974,
      [
        ["Curls", "3", "10-12"],
        ["Extensions", "3", "10-12"],
      ],
    ],
  ]);
  const location = useLocation();

  return (
    <div>
      <div className="workout-header">{location.state.title}</div>
      <div className="exercises-view">
        <WorkoutExercises
          exercises={exerciseArray}
          workoutID={location.state.id}
        />
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
};

export default Workout;
