import React, { useState } from "react"
import { useLocation } from "react-router";

const WorkoutExercises = props => {
    return (
        <div className="workout-exercises-container">
            {Array.from(props.exercises).map(exercise => {
                return (
                    <div>
                        <div className="exercises">
                            {exercise[0]}  ||  {exercise[1]} sets  ||  {exercise[2]} reps
                        </div>        
                    </div>
                )
            })}
        </div>
    )
}

export default WorkoutExercises