import React from "react"
import Navbar from "../home/components/Navbar"
import { useLocation } from "react-router";

class Workout extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    {this.state.workout.id}
                </div>
                <div className="navbar-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default Workout