import React from 'react'
import './style.css'
import treva from '../../images/treva.png'
import {Link} from 'react-router-dom'

function SideBar() {
    return (
        <div>
        <div className="sidebar">
        <div className="sidebar__heading">
            <img className="logo" src={treva} alt="logo" />
        </div>
        <ul>
            <li classNameName="item"><Link to="/"><i className="fas fa-home"></i>&nbsp;Home</Link></li>
            <li><Link to="/profile"><i className="fas fa-user"></i>&nbsp;Profile</Link></li>
            <li><Link to="/about"><i className="fas fa-address-card"></i>&nbsp;About</Link></li>
            <li><Link to="/portfolio"><i className="fas fa-project-diagram"></i>&nbsp;Portfolio</Link></li>
            <li><Link to="/blogs"><i className="fas fa-blog"></i>&nbsp;Blogs</Link></li>
            <li><Link to="#"><i className="fas fa-address-book"></i>&nbsp;Contact</Link></li>
   
        </ul> 
        </div>
        </div>
    )
}

export default SideBar;