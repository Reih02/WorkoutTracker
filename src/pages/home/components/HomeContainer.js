import React from "react"
import Navbar from "./Navbar"
import Header from "./Header"
import HomeProfile from "./HomeProfile"
import WorkoutContainer from "../../workouts/WorkoutContainer"

class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <div className="header">
                    <Header />
                </div>
                <div className="home-profile">
                    <HomeProfile />
                </div>
                <div className="navbar-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default HomeContainer