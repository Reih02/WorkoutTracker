import React from "react"
import Navbar from "../home/components/Navbar"

let profileInfo = {
    username: "reilleo",
    workouts: 10,
}

class ProfileContainer extends React.Component {
    render() {
        return(
            <div>
                <div></div>
                <div className="navbar-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default ProfileContainer