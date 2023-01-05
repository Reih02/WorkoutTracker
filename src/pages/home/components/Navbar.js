import React from "react"
import { Link } from "react-router-dom"

// array of links for use in navbar
const links = [
    {
        id: 1,
        path: "/",
        text: "Home",
    },
    {
        id: 2,
        path: "/workouts",
        text: "View workouts",
    },
    {
        id: 3,
        path: "/profile",
        text: "View profile",
    }
]

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                {links.map(link => {
                        return (
                            <Link to={link.path}><div key={links.id} className="navbar-link">{link.text}</div></Link>
                        )
                })}
            </div>
        )
    }
}

export default Navbar