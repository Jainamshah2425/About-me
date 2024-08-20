import React,{useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Project from './pages/Project';
import Contact from './pages/Contact';
import {motion} from 'framer-motion'


const Navbar= ()=> {
  

  
    return (
        <>
           <motion.div 
               initial={{opacity:0}}
               animate={{opacity:1,transition:{delay:0.2}}}
           className='flex  justify-between items-center w-full h-20  text-white  bg-black '>
  <div><h1 className='p-4'>
    Jainam Shah
  </h1>
  <ul className='flex '>
    <li className='flex items-center absolute top-0 right-64 h-12 w-24 mt-6 cursor-pointer text-right'  ><Link to ='/'>Home</Link></li>
    <li className='flex items-center absolute top-0 right-36 h-12 w-24 mt-6 cursor-pointer text-right'><Link to="/project">Project</Link></li>
    <li className='flex items-center absolute top-0 right-8 h-12 w-24 mt-6 cursor-pointer text-right'>< Link to="/contact">Contact</Link></li>
  </ul>
 
</div>
           </motion.div>
                  </>
    )
}
export default Navbar