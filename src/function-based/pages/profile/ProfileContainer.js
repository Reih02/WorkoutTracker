import React from "react"
import Navbar from "../home/components/Navbar"
import ProfileHeader from "./ProfileHeader"

const ProfileContainer = () => {
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

export default ProfileContainer