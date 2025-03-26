// import React,{useState} from 'react'
// import pic from  '../assets/jainam1.jpeg'
// import {motion} from 'framer-motion'
// import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';


// const Home = () => {
//   const [activeTab, setActiveTab] = useState('skill'); 

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };
//   return (
//     <>
//       <motion.div 
//           initial={{opacity:0}}
//           animate={{opacity:1,transition:{delay:0.5}}}
//       className='w-full h-full  overflow-visible bg-gradient-to-b from-black to-gray-900'>
//        <img className='w-96 p-3  items-end ' src={pic} alt="photo"/>
//       <motion.div 
      
//       initial={{opacity:0}}
//       animate={{opacity:1,transition:{delay:0.8}}}
//       className='text-white flex  absolute top-20 right-8 left-96 bottom-64'>
//        <h1 className='text-5xl items-center flex mx-5'>
//         Hi,I am Jainam Shah an aspiring IT engineer.
//        </h1>
//        <p className='text-base flex  items-center absolute top-64 left-4'>
//         Currently,I love programming in HTML,CSS,Javascript.I m learning backend with node.js and python simulataneuosly.I am passionate about learning new techonlogies        </p>

//       </motion.div>
//       <div className='h-32 absolute top-96 left-96 -bottom-1 right-8 flex items-center '>
       
//        <button onClick={()=> handleTabClick('skill')} className='text-5xl relative left-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-3'>
//         Skills 
//        </button>
//        <button  onClick={()=> handleTabClick('exp')} className='text-5xl absolute left-80 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  p-3'>
//        something else
//        </button>
//        <button  onClick={()=> handleTabClick('edu')} className='text-5xl relative left-2/4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-3'>
//          Education
//        </button>
//       </div>
//       <div className='text-white   flex '>
//       {activeTab === 'skill' && (
//           <motion.div 
          
//           initial={{x:'-100vw',opacity:0}}
//           animate={{x:0,opacity:1}}
//           transition={{duration:2}} 
//           className='absolute top-3/4 left-96   text-3xl rounded-md bg-gradient-to-r   p-4'>
//               <ul>
//               <li>Frontend</li>
              
//               <li>Mongo Db</li>
//               <li>React</li>
//               <li>Java </li>
//               <li>Python(Basics)</li>
//               <li>C Language </li>
              
//             </ul>
//           </motion.div>
//         )}
          
//         {activeTab === 'edu' && (
//            <motion.div
//            initial={{x:'-100vw',opacity:0}}
//            animate={{x:0,opacity:1}}
//            transition={{duration:1}} 
//            className=' absolute  top-3/4 left-96 right-1/ text-3xl rounded-md bg-gradient-to-r   p-4'>
//             <ul>
//               <li>Shri S.K.I High School<br></br> <span className='text-xl'>
//                 (2006-2021)</span> </li>
//               <li>K.C.College <span className='text-xl'>
//                  <br></br>(2021-2023)</span></li>
//               <li>Svkm's Dwarkadas J.Sanghvi College of Engineering<br></br><span className='text-xl'>(2023-present)
//                 </span> </li>
              
//             </ul>
//           </motion.div>
//         )}
         
        
//         </div>
        
//   <div className='text-xl text-center mt-52 mb-4 text-white'> 
//     Based in: Mumbai, India
//   </div>
//   <div className='flex justify-center items-center space-x-4 mt-4 text-white'>
//     <p className='text-lg'>Connect with me:</p>
//     <a href='https://www.linkedin.com/in/jainam-shah-0a1410244/' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-blue-400'><FaLinkedin /></a>
//     <a href='https://github.com/Jainamshah2425' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-gray-400'><FaGithub /></a>
//     <a href='https://x.com/JainamShah2425' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-blue-300'><FaTwitter /></a>
//   </div>

      
      
    
       
    
           
      
// </motion.div>


      
//     </>
//   )
// }

// export default Home



import React, { useState, useEffect } from 'react';
import pic from '../assets/jainam1.jpeg';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Home = () => {
  const [activeTab, setActiveTab] = useState('skill');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      className='w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center'
    >
      {/* Header Section */}
      <div className='w-full max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between mt-8'>
        <img className='w-40 md:w-96 h-40 md:h-auto  p-3' src={pic} alt='Jainam Shah' />
        <div className='mt-4 md:mt-0 text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl font-bold'>Hi, I am Jainam Shah</h1>
          <p className='text-lg mt-2'>Aspiring IT Engineer passionate about technology.</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className='mt-6 flex flex-wrap justify-center gap-4'>
        <button onClick={() => handleTabClick('skill')} className='bg-cyan-500 text-white px-6 py-2 rounded-lg text-lg'>Skills</button>
        {isSmallScreen ? (
          <button onClick={() => handleTabClick('edu')} className='bg-cyan-500 text-white px-6 py-2 rounded-lg text-lg'>Education</button>
        ) : (
          <button onClick={() => handleTabClick('exp')} className='bg-cyan-500 text-white px-6 py-2 rounded-lg text-lg'>Experience</button>
        )}
      </div>

      {/* Content Section */}
      <div className='mt-6 w-full max-w-3xl px-6'>
        {activeTab === 'skill' && (
          <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='bg-gray-800 p-4 rounded-lg'>
            <h2 className='text-2xl font-semibold'>Skills</h2>
            <ul className='mt-2 space-y-2'>
              <li>Frontend Development</li>
              <li>MongoDB</li>
              <li>React</li>
              <li>Java</li>
              <li>Python (Basics)</li>
              <li>C Language</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'edu' && (
          <motion.div initial={{ x: '100vw' }} animate={{ x: 0 }} transition={{ duration: 0.5 }} className='bg-gray-800 p-4 rounded-lg'>
            <h2 className='text-2xl font-semibold'>Education</h2>
            <ul className='mt-2 space-y-2'>
              <li>Shri S.K.I High School (2006-2021)</li>
              <li>K.C. College (2021-2023)</li>
              <li>SVKM's Dwarkadas J. Sanghvi College of Engineering (2023-present)</li>
            </ul>
          </motion.div>
        )}

        {!isSmallScreen && activeTab === 'exp' && (
          <motion.div initial={{ x: '-100vw' }} animate={{ x: 0 }} transition={{ duration: 1 }} className='bg-gray-800 p-4 rounded-lg'>
            <h2 className='text-2xl font-semibold'>Experience</h2>
            <ul className='mt-2 space-y-2'>
              <li>Frontend Intern at XYZ Company</li>
              <li>Backend Developer at ABC Tech</li>
              <li>Contributed to Open Source Projects</li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* Footer Section */}
      <footer className='mt-10 w-full bg-gray-900 py-4 flex flex-col items-center'>
        <p className='text-lg'>Based in: Mumbai, India</p>
        <div className='flex space-x-4 mt-2'>
          <a href='https://www.linkedin.com/in/jainam-shah-0a1410244/' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-blue-400'><FaLinkedin /></a>
          <a href='https://github.com/Jainamshah2425' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-gray-400'><FaGithub /></a>
          <a href='https://x.com/JainamShah2425' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-blue-300'><FaTwitter /></a>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;
