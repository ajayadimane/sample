
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FiHome, FiSettings, FiMail, FiUser, FiCalendar, FiCheckSquare } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import './App.css';


function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const generateRandomIcon = () => {
    const icons = [FiHome, FiSettings, FiMail, FiUser, FiCalendar, FiCheckSquare];
    const randomIndex = Math.floor(Math.random() * icons.length);
    const Icon = icons[randomIndex];
    return <Icon />;
  };

  

  return (
    
    <Router>
      <div className="App">
        <div className={`navigation-drawer ${drawerOpen ? 'open' : ''}`}>
       
          <div className="navigation-header">
         
            <h1>BOTAIML</h1>
            <button className="close-button" onClick={toggleDrawer}>
              <AiOutlineClose />
            </button>
            </div>

            
            <div>
            <img src="https://botaiml.com/images/logo-white.png" alt="React Image" />
            </div>
          
          <div className="navigation-links">
            <Link to="/">
              {generateRandomIcon()}
              <span>Dashboard</span>
            </Link>
            <Link to="/messages">
              {generateRandomIcon()}
              <span>Employee</span>
            </Link>
            <Link to="/contacts">
              {generateRandomIcon()}
              <span>Logs</span>
            </Link>
            <Link to="/calendar">
              {generateRandomIcon()}
              <span>About us</span>
            </Link>
            <Link to="/tasks">
              {generateRandomIcon()}
              <span>Logout</span>
            </Link>
          </div>
        </div>

        <div className={`overlay ${drawerOpen ? 'open' : ''}`} onClick={toggleDrawer}></div>

        <div className="main-content">
          <div className="top-div">
            <button className="menu-button" onClick={toggleDrawer}>
              {drawerOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
            <h1>Lorem Ipsum</h1>
          </div>
          <div className="main-page-content">
            <Routes>
              <Route path="/messages" element={<h2>Employee Details</h2>} />
              <Route path="/contacts" element={<h2>LOGS</h2>} />
              <Route path="/calendar" element={<h2>Calendar</h2>} />
              <Route path="/tasks" element={<h2>Tasks</h2>} />
              <Route path="/" element={<h2>Main page content here</h2>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    
  );

  
}

export default App;
