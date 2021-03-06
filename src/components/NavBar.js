import React from 'react'
import {Link} from 'react-router-dom'

//Images
import logo from '../images/sitelogo.JPG'

export default function NavBar(props) {
    
    const handleSearchClick = () => {
        props.handleSearchOpen()  
    }

    return (
        <div className="navbar">
            <div className="logo_container">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="links_container">
                <Link to="/">Positions</Link>
                <a id="search_stocks_icon" onClick={handleSearchClick}>Stocks 🔍</a>
            </div>
        </div>
    )
}
