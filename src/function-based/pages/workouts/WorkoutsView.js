import React from "react"
import { Link, useNavigate } from "react-router-dom"

const WorkoutsView = props => {
    const navigate = useNavigate()

    const toWorkout = (workout) => {
        navigate(`view-workout/${workout.id}`, {state: workout})
    }

    return(
        <div>
            <button type="submit" onClick={() => props.addWorkoutProps()}>
                <div className="add-workout-button">
                    Create a new workout
                </div>
            </button>
            {Array.from(props.workouts).map(workout => {
                return (
                    <div>
                        <a onClick={() => {toWorkout(workout)}}>
                            <div key={workout.id} className="workouts">
                                {workout.title}
                            </div>
                        </a>
                                
                        <div className="workout-remove-button">
                            {workout.id}
                            <button type="submit" onClick={() => props.removeWorkoutProps(workout.id)}>
                                <div className="workout-remove-text">
                                    DELETE
                                </div>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WorkoutsView