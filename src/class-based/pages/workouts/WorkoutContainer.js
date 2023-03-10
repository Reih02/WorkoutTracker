import React from "react"
import Navbar from "../home/components/Navbar"
import WorkoutsView from "./WorkoutsView"
import WorkoutsHeader from "./WorkoutsHeader"
import Workout from "./Workout"
import { Link } from "react-router-dom"
import { assertExistsTypeAnnotation } from "@babel/types"

class WorkoutContainer extends React.Component {
    state = {
        workouts: []
    }

    addWorkout = () => {
        let newId = this.state.workouts.length
        let nextWorkouts = [
            {id: newId, title: "New workout", link: "/workouts/${}"},
            ...this.state.workouts.slice(0) // done this way to avoid array mutation
        ]
        this.setState({
            workouts: nextWorkouts
        })
    }

    removeWorkout = (workoutId) => {
        let nextWorkouts = [
            ...this.state.workouts.filter(workout => workout.id != workoutId) // avoids array mutation
        ]
        this.setState({
            workouts: nextWorkouts
        })
    }

    render() {
        return(
            <div>
                <div className="header">
                    <WorkoutsHeader />
                </div>
                <div className="workouts-view">
                    <WorkoutsView workouts={this.state.workouts} addWorkoutProps={this.addWorkout} removeWorkoutProps={this.removeWorkout} />
                </div>
                <div className="navbar-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default WorkoutContainer