import React, { useState } from "react"
import Navbar from "../home/components/Navbar"
import { useLocation } from "react-router";

const Workout = () => {

    const location = useLocation()

    return (
        <div>
            <div className="header">
                Workout Title: {location.state.title}
            </div>
            <div className="navbar-container">
                <Navbar />
            </div>
        </div>
    )
}

export default Workout