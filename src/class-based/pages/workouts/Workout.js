import React from "react"
import Navbar from "../home/components/Navbar"
import { useLocation } from "react-router";

class Workout extends React.Component {

    getState() {
        const location = useLocation()
        const workoutData = location.state
        return workoutData
    }

    render() {
        return (
            <div>
                <div className="header">
                    {this.getState.id}
                </div>
                <div className="navbar-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Workout