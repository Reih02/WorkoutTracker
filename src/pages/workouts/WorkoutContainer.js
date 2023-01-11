import React from "react"
import Navbar from "../home/components/Navbar"
import WorkoutsView from "./WorkoutsView"
import WorkoutsHeader from "./WorkoutsHeader"
import AddWorkout from "./AddWorkout"
import { Link } from "react-router-dom"
import { assertExistsTypeAnnotation } from "@babel/types"

class WorkoutContainer extends React.Component {
    state = {
        workouts: [
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
    }
    

    addWorkout = () => {
        const insertAt = 0;
        let newID = this.state.workouts.length
        const newWorkouts = {
            workouts: [
                {
                    id: newID,
                    title: "New workout",
                    link: "/workouts"
                }
                // need old workouts array here
            ]
        }
        this.setState({
            newWorkouts
        })
    }

    render() {
        return(
            <div>
                <div className="header">
                    <WorkoutsHeader />
                </div>
                <div className="workouts-view">
                    <WorkoutsView workouts={this.state.workouts} addWorkoutProps={this.addWorkout}/>
                </div>
                <div className="navbar-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default WorkoutContainer