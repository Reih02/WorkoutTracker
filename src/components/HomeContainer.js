import React from "react"
import Navbar from "./Navbar"
import Header from "./Header"

class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Navbar />
            </div>
        )
    }
}

export default HomeContainer