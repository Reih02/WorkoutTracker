import React, { useState } from "react"
import Navbar from "../home/components/Navbar"
import { useLocation } from "react-router";

const Workout = () => {
    const [workoutData, setWorkoutData] = useState([])
    const location = useLocation()

    return (
        <div>
            <div className="workout-header">
                Workout Title: 
                <form>
                    <label>
                        <input
                            type="text"
                            value={workoutData}
                            onsubmit={(e) => setWorkoutData([e.target.value])} />
                    </label>    
                </form>{location.state.title}
            </div>
            <div className="navbar-container">
                <Navbar />
            </div>
        </div>
    )
}

export default Workout