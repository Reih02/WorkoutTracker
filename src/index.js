import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// component files
import HomeContainer from "./pages/home/components/HomeContainer"
import WorkoutContainer from "./pages/workouts/WorkoutContainer"
import Navbar from "./pages/home/components/Navbar"

//stylesheet
import "./App.css"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/workouts" element={<WorkoutContainer />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
)