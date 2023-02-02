import React, { useState } from "react";
import { useLocation } from "react-router";

const WorkoutExercises = (props) => {
  console.log(props.exercises);
  let currExercises = Array.from(props.exercises).filter(
    (exercise) => exercise.id == props.workoutID
  );
  if (currExercises.length > 0) {
    currExercises = currExercises[0].exercises;
  } else {
    currExercises = { id: props.workoutID, exercises: [] };
  }
  console.log(currExercises);
  return (
    <div>
      <form>
        <input
          type="text"
          id="exerciseTitleInput"
          placeholder="Enter the exercise title..."
        />
        <button
          type="submit"
          onClick={() =>
            props.addExerciseProps([
              document.getElementById("exerciseTitleInput").value,
              "2",
              "15-20",
            ])
          }
        >
          <div className="add-workout-button">Create a new workout</div>
        </button>
      </form>
      {Array.from(currExercises).map((exercise) => {
        return (
          <div key={exercise[0]} className="exercises">
            {exercise[0]} || {exercise[1]} sets || {exercise[2]} reps
          </div>
        );
      })}
    </div>
  );
};

export default WorkoutExercises;
