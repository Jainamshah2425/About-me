import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {motion} from 'framer-motion'
const Contact = () => {
  const[log,setlog]=useState('');
  const[nu,setnu]=useState('');
  const handtabClick =  () => {
    setlog('');
    setnu('');
  };
  
  return (
    <>
    
    <div>Experience
    
        <motion.div
        initial={{x:'-100vw',opacity:0}}
        animate={{x:0,opacity:1}}
        transition={{duration:1}} 


        className=' absolute  top-3/4 left-96 right-1/4 text-3xl rounded-md bg-gradient-to-r   p-4'>
          <ul>
            <li>Intern at WEBXELA</li>
            <li>Publicity Co-Committee Member at DJSCE E-CELL</li>
            <li>Events Co-Committee Member at DJS-MUNSOC</li>

          </ul>
        </motion.div>
    </div>
      
    
      
    
    </>
  )
}

export default Contact
