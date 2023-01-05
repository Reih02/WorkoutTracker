import React from "react"
import Navbar from "../home/components/Navbar"

class WorkoutContainer extends React.Component {
    render() {
        return(
            <div>
                <div className="navbar-container">
                    <Navbar />
                </div>
                <h1> hello from workouts page </h1>
            </div>
        )
    }
}

export default WorkoutContainer