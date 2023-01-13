import React from "react"
import Navbar from "../home/components/Navbar"
import ProfileHeader from "./ProfileHeader"

class ProfileContainer extends React.Component {

    render() {
        return(
            <div>
                <div className="header">
                    <ProfileHeader />
                </div>
                <div className="navbar-container">
                    <Navbar />
                </div>
            </div>
        )
    }
}

export default ProfileContainer