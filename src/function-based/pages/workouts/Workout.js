import React, { useState } from "react";
import Navbar from "../home/components/Navbar";
import { useLocation } from "react-router";
import WorkoutExercises from "./WorkoutExercises";

const Workout = () => {
  const [exerciseArray, setExercises] = useState([
    {
      id: 0.46969949751866613,
      exercises: [
        ["Bench press", "3", "8-10"],
        ["Barbell rows", "3", "8-10"],
        ["Chest flyes", "4", "10-12"],
        ["Lat pulldowns", "4", "10-12"],
        ["Machine row", "3", "10-12"],
      ],
    },
    {
      id: 0.38844178397623974,
      exercises: [
        ["Curls", "3", "10-12"],
        ["Extensions", "3", "10-12"],
      ],
    },
  ]);
  const location = useLocation();

  const addExercise = (exerciseID, exerciseInfo) => {
    let workingElement = exerciseArray.find(
      (exercise) => exercise.id == exerciseID
    );
    if (workingElement == undefined) {
      setExercises(...exerciseArray, {
        id: exerciseID,
        exercises: [exerciseInfo],
      });
    } else {
      let newElement = {
        id: exerciseID,
        exercises: workingElement.exercises.push(exerciseInfo),
      };
      let nextExercises = [
        [
          ...exerciseArray.filter(
            (exerciseElement) => exerciseElement.id != exerciseID
          ),
          newElement,
        ],
      ];
      setExercises(nextExercises);
    }
  };

  return (
    <div>
      <div className="workout-header">{location.state.title}</div>
      <div className="exercises-view">
        <WorkoutExercises
          exercises={exerciseArray}
          workoutID={location.state.id}
          addExerciseProps={addExercise}
        />
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </div>
  );
};

export default Workout;
