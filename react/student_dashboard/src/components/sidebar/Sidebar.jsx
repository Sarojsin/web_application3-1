import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
const Sidebar = ({activePage,onNavigate}) => {
  
  return (
    <div className="sidebar">

      <nav className="sidebar-menu">

        <NavLink to="/overview"className={`menuitem ${activePage==="overview"?"active":""}`}
        onClick={()=>onNavigate('overview')}
        >
            Overview
        </NavLink>
        <NavLink to="/details"   
        className={`menuitem ${activePage==="details"?"active":""}`}
        onClick={()=>onNavigate('details')}
        >
            Details
        </NavLink>
      </nav>
    </div>
   )
}

export default Sidebar