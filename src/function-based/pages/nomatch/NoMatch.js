import React from "react"
import { Link } from "react-router-dom"

const NoMatch = () => {
    return(
        <div>
            <div className="error-page">
                Sorry, we couldn't find the page you tried to access!
            </div>
            <div className="error-page-link">
                <Link to="/">Go back home</Link>
            </div>
        </div>
    )
}

export default NoMatch