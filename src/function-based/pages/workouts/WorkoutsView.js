import React from "react"
import { Link, useNavigate } from "react-router-dom"

const WorkoutsView = props => {
    const navigate = useNavigate()

    const toWorkout = (workout) => {
        navigate(`view-workout/${workout.id}`, {state: workout})
    }

    return(
        <div>
            <form>
                <input type="text" id="workoutTitleInput" placeholder="Enter the workout title..."/>
                <button type="submit" onClick={() => props.addWorkoutProps(document.getElementById("workoutTitleInput").value)}>
                    <div className="add-workout-button">
                        Create a new workout
                    </div>
                </button>
            </form>
            {Array.from(props.workouts).map(workout => {
                return (
                    <div>
                        <a onClick={() => {toWorkout(workout)}}>
                            <div key={workout.id} className="workouts">
                                {workout.title}
                            </div>
                        </a>
                                
                        <div className="workout-remove-button">
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