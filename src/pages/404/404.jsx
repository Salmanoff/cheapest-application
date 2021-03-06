import React from 'react'
import { Link } from 'react-router-dom'
import './404.css';
const PageNotFound = () => {

    React.useEffect(() => {
        document.title = 'Page Not Found!'
    },[])

    return (
        <div className="PageNotFound">
                        <img src={require("../../images/404.png")} alt="404 not found"/>
            <h1>Page Not Found!!!</h1>
            <div className="PageNotFound--Nav">
                <Link to='/'>Back to homepage</Link>
            </div>
        </div>
    )
}

export default PageNotFound;