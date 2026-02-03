import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Footer from './components/Footer'
import Overview from './components/Overview'
import Details from './components/Details'
import './App.css'

import { Routes ,Route, Navigate } from 'react-router-dom'

const App = () => {

    const [currentPage, setCurrentPage] = React.useState('overview')
   
  return (
    <>
<div className="app-container">
      
        <div className="navbar-content">
          {/* Navbar */}
          <Navbar />
        </div>

        <Sidebar
          activePage={currentPage}
          onNavigate={setCurrentPage}    
        />

        {/* Dynamic Content Area */}
        <div className="content-wrapper"> 
          <Routes>
            <Route path="/" element={<Navigate to="/overview"  replace = {true}/>} />
            { currentPage === 'overview' && <Route path="/overview" element={<Overview />} /> }  
            { currentPage === 'details' && <Route path="/details" element={<Details />} /> } 
          </Routes>
        </div>


        <div className="footer-content">
          {/* Footer */}
          <Footer />
        </div>
        
      </div>

    </>
  )
}

export default App