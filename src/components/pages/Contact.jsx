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
    <div className='text-white w-full h-screen bg-gradient-to-b from-black to-gray-900'>
      
      <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1,transition:{delay:0.5}}}
        
        
        className='flex absolute top-36 left-1/4 bottom-5 right-40'>
      <h1 className='flex text-4xl relative left-52'>
        Contact Us
      </h1>
      <h2 className='text-lg relative top-16 -right-4'>
         <label className='relative top-7 right-16'>
          Gmail:
     
     <input className='text-black'value={log} onChange={(e)=> setlog(e.target.value) } placeholder="Enter your Gmail" rows="1" cols="25" >
     </input>
     </label>
      </h2>
      
      <h2 className='text-lg  '>
        <label className='absolute top-40 left-12 right-1/2  '>
          Phone Number:
          
          <input className='text-black' value={nu} onChange={(e)=> setnu(e.target.value)} type="number" placeholder='Phone number' rows="1" cols="5">
              
              
         </input>
        </label>
      </h2>
      
      <button className='relative bottom-2 right-48 'onClick={handtabClick}>
       <h2 className='rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-4'>Submit</h2> 
      </button>
      </motion.div>
     <motion.div 
          
          initial={{x:'100vw',opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:2}} 
      
       className='  absolute bottom-10  '>
 <h1 className='text-2xl text-center '>
  Gmail:jainam1234..@gmail.com<br>
  </br>
  Phone:854488XX<br></br>
  Git:absncn.com<br/>
  Linkedin:xxxxxx.com
 </h1>
     </ motion.div>
    </div>
    
      
    
    </>
  )
}

export default Contact
