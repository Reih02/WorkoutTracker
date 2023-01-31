import React from "react"
import { Link } from "react-router-dom"

class WorkoutsView extends React.Component {
    render() {
        return(
            <div>
                {this.props.workouts.map(workout => {
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