import React, { useState } from "react"
import Navbar from "../home/components/Navbar"
import { useLocation } from "react-router";
import WorkoutExercises from "./WorkoutExercises";

const Workout = () => {
    const [exerciseArray, setExercises] = useState([["Bench press", "3", "8-10"], ["Barbell rows", "3", "8-10"], ["Chest flyes", "4", "10-12"], ["Lat pulldowns", "4", "10-12"]])
    const location = useLocation()

    return (
        <div>
            <div className="workout-header">
                {location.state.title}
            </div>
            <div className="workout-exercises">
                <WorkoutExercises exercises={exerciseArray} />
            </div>
            <div className="navbar-container">
                <Navbar />
            </div>
        </div>
    )
}

export default Workout