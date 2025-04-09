import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import work1 from '../pages/work1.png';
import work2 from '../pages/res_img.jpg';



const Project = () => {
  return (
    <div
     className='text-white w-full h-full bg-gradient-to-b from-black to-gray-900 '>
      <motion.div
      initial={{ y:'-100vw',opacity: 0 }}
      animate={{y:'0', opacity: 1 }}
      transition={{ duration: 3}}
      
      className=''>
        <img className='h-96' src={work1} alt="project1"/>
         <h1 className='flex items-center  text-4xl   absolute top-1/4 left-1/2 '>
           Spotify Clone using HTML,CSS,Javascript
         </h1>
      </motion.div>
      <motion.div 
      
     
      initial={{ y:'-100vw',opacity: 0 }}
      animate={{y:'0', opacity: 1 }}
      transition={{ duration: 2 }}
      className=' '>
        <img className='h-96 p-2' src={work2} alt="jd"   />
        <h1 className='flex items-center  text-4xl   absolute top-3/4 left-1/2 '>
        Resume Category Prediction App
      </h1>

      </motion.div>
      {/* <motion.div
      initial={{ y:'-100vw',opacity: 0 }}
      animate={{y:'0', opacity: 1 }}
      transition={{ duration: 1.5}}>
        <img className='w-1/2 h-96 p-2' src={work3} alt="hello"/>
        <span className='text-4xl   relative top-3/4 bottom-64 left-1/2 '>
          To-do List using React
        </span>
      
      </motion.div> */}
    </div>
  )
}

export default Project
