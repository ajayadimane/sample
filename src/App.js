
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom';
import { FiHome, FiSettings, FiMail, FiUser, FiCalendar, FiCheckSquare, FiDatabase } from 'react-icons/fi';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import  Login  from "./Login";
import { Register } from "./Register";
import './App.css';
import Logs from './Logs';
import Emplyee from './Employee';
import Dashboard from './Dashboard';


function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const generateRandomIcon = () => {
    const icons = [FiHome, FiDatabase, FiSettings, FiUser, FiCheckSquare];
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
            <img src="https://botaiml.com/images/logo-white.png" alt="React" />
            </div>
          
          <div className="navigation-links">
           
            <Link to="/Dashboard">
              {generateRandomIcon()}
              <span>Dashboard</span>
            </Link>
            <Link to="/Employees">
              {generateRandomIcon()}
              <span>Employee</span>
            </Link>
            <Link to="/Employee">
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
            <img src="https://www.maheshwarielectronics.com/images/logo_final.png" alt="React" />
            
          </div>
         
          <div className="main-page-content">
           
            <Routes>
              <Route path="/Dashboard" element={<Dashboard/>} />
              <Route path="/Employees" element={<h2>Employees</h2>}/>
              <Route path="/Employee" exact element={ <Emplyee/> } />
              
             
              <Route path="/calendar" element={<h2>About Us</h2>} />
              <Route path="/tasks" element={<h2>LogOut</h2>} />
              <Route path="/" element={<h2>Main page content here</h2>} />
            </Routes>
            
          </div>
        </div>
      </div>
     
    </Router>
    
    
    
  );

  
}

export default App;
