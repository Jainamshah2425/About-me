import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'

import Project from './components/pages/Project.jsx'
import Home from './components/Home.jsx'
import Experience from './components/pages/Experience.jsx'

import {BrowserRouter,Routes,Route} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
   
    
    <BrowserRouter>
     
        <App/>
       
       
   
   
      
    </BrowserRouter>
  </React.StrictMode>,
)
