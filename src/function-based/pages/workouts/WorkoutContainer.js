import React, { useState } from "react"
import Navbar from "../home/components/Navbar"
import WorkoutsView from "./WorkoutsView"
import WorkoutsHeader from "./WorkoutsHeader"
import Workout from "./Workout"
import { Link } from "react-router-dom"

const WorkoutContainer = () => {
    const [workouts, setWorkouts] = useState([]) // init state with empty array to hold workouts

    const addWorkout = () => {
        let newId = Array.from(workouts).length // new id will always be one more than length of array, thus always has unique key
        let nextWorkout = {
            id: newId, title: "New workout"
        }
        setWorkouts([nextWorkout, ...workouts])
    }

    const removeWorkout = (workoutId) => {
        let nextWorkouts = [
            ...workouts.filter(workout => workout.id != workoutId) // avoids array mutation
        ]
        setWorkouts({
            workouts: nextWorkouts
        })
    }

    return(
        <div>
            <div className="header">
                <WorkoutsHeader />
            </div>
            <div className="workouts-view">
                <WorkoutsView workouts={workouts} addWorkoutProps={addWorkout} removeWorkoutProps={removeWorkout} />
            </div>
            <div className="navbar-container">
                <Navbar />
            </div>
        </div>
    )
}

export default WorkoutContainer