import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// component files
import HomeContainer from "./function-based/pages/home/components/HomeContainer"
import WorkoutContainer from "./function-based/pages/workouts/WorkoutContainer"
import Workout from "./function-based/pages/workouts/Workout"
import ProfileContainer from "./function-based/pages/profile/ProfileContainer"
import NoMatch from "./function-based/pages/nomatch/NoMatch"

//stylesheet
import "./App.css"

ReactDOM.render(
    // Directory paths for links leading to other classes
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/workouts" element={<WorkoutContainer />} />
            <Route path="/workouts/view-workout/:id" element={<Workout />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
)