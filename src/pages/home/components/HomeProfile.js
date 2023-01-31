import React from "react"

class HomeProfile extends React.Component {
    render() {
        return (
            <div className="home-profile-container">
                <div className="home-profile-child">
                    <div className="home-profile-activity">
                        Recent workouts
                    </div>
                </div>
                <div className="home-profile-child">
                    <div className="home-profile-info">
                        Profile info
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeProfile