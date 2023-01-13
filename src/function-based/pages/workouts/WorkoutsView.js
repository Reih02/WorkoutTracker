import React from "react"
import { Link } from "react-router-dom"

const WorkoutsView = props => {
    return(
        <div>
            <button type="submit" onClick={() => props.addWorkoutProps()}>
                <div className="add-workout-button">
                    Create a new workout
                </div>
            </button>
            {Array.from(props.workouts).map(workout => {
                return (
                    <Link
                        to={{
                            pathname: `view-workout/${workout.id}`,
                            state: { workout }
                        }}
                        >
                        <div key={workout.id} className="workouts">
                            {workout.title}
                            
                            <div className="workout-remove-button">
                                <button type="submit" onClick={() => props.removeWorkoutProps(workout.id)}>
                                    <div className="workout-remove-text">
                                        DELETE
                                    </div>
                                </button>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default WorkoutsView