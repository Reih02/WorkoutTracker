import React, { useState } from "react";
import { useLocation } from "react-router";

const WorkoutExercises = (props) => {
  let currExercises = [];
  return Array.from(props.exercises).map((exercise) => {
    if (exercise[0] == props.workoutID) {
      currExercises = exercise[1];
      return currExercises.map((currExercise) => {
        return (
          <div key={currExercise[0]} className="exercises">
            {currExercise[0]} || {currExercise[1]} sets || {currExercise[2]}{" "}
            reps
          </div>
        );
      });
    }
  });
};

export default WorkoutExercises;
