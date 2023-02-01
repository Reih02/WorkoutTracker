import React, { useState } from "react";
import { useLocation } from "react-router";

const WorkoutExercises = (props) => {
  Array.from(props.exercises).map((exercise) => {
    if (exercise[0] == props.workoutID) {
      console.log(props.workoutID);
    }
  });
};

export default WorkoutExercises;
