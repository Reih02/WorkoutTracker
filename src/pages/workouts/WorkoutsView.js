import React from "react"
import { Link } from "react-router-dom"

class WorkoutsView extends React.Component {
    render() {
        return(
            <div>
                <button type="submit" onClick={this.props.addWorkoutProps}>
                    <div className="add-workout-button">
                        Create a new workout
                    </div>
                </button>
                {Array.from(this.props.workouts).map(workout => {
                    return (
                        <Link to={workout.link}>
                            <div key={workout.id} className="workouts">
                                {workout.title}
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }

}

export default WorkoutsView