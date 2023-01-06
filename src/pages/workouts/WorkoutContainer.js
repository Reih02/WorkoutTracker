import React from "react"
import Navbar from "../home/components/Navbar"
import WorkoutsView from "./WorkoutsView"
import { Link } from "react-router-dom"

class WorkoutContainer extends React.Component {

    workouts = [
        {
            id: 1,
            title: "Workout 1",
            link: "/workouts"
        },
        {
            id: 2,
            title: "Workout 2",
            link: "/workouts"
        },
        {
            id: 3,
            title: "Workout 3",
            link: "/workouts"
        },
        {
            id: 4,
            title: "Workout 4",
            link: "/workouts"
        }
    ]

    render() {
        return(
            <div>
                <div className="add-workout">
                </div>
                <div className="workouts-view">
                    <WorkoutsView workouts={this.workouts} />
                </div>
                <div className="navbar-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default WorkoutContainer