import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Home from './Home';
import {motion} from 'framer-motion'


const Navbar= ()=> {
  

  
    return (
        <>
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1, transition: { delay: 0.2 } }}
  className="flex justify-between items-center w-full h-20 text-white bg-black px-6"
>
  {/* Left side: Name */}
  <h1 className="text-xl font-bold">Jainam Shah</h1>

  {/* Right side: Navigation */}
  <ul className="flex space-x-6">
    <li className="cursor-pointer">
      <Link to="/">Home</Link>
    </li>
    <li className="cursor-pointer">
      <Link to="/experience">Experience</Link> 
    </li>
    <li className="cursor-pointer">
      <Link to="/">Resume</Link>
    </li>
    <li className="cursor-pointer">
      <Link to="/project">Project</Link>
    </li>
   
  </ul>
</motion.div>

                  </>
    )
}
export default Navbar