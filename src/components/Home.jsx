import React, { useState, useEffect } from 'react';
import pic from '../assets/jainam1.jpeg';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { FaXTwitter } from 'react-icons/fa6';
import Spline from '@splinetool/react-spline';

const Home = () => {
  const [activeTab, setActiveTab] = useState('skill');
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const sentences = [
    "Hi,I am Jainam Shah",
    "Aspiring IT Engineer",
    "Passionate about Web Development"
  ];
 const[index,setIndex]=useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    const textInterval = setInterval(() => {
      setFadeIn(false); // Start fade out
      setTimeout(() => {
        // Cycle back to the first sentence after the third one
        setIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
        setFadeIn(true); // Start fade in
      }, 500); // Wait for fade out to complete
    }, 3000); // Change text every 3 seconds
  
    return () => clearInterval(textInterval);
  }, []);
  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, {});
 

  return (
    <> 
   
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      className='w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center'
    >
   
      
      {/* Header Section */}
      <div className='w-full max-w-5xl px-6 flex flex-col md:flex-row items-center justify-between mt-8 '>
        <img className='w-40 md:w-96 h-40 md:h-auto  p-3' src={pic} alt='Jainam Shah' />
       
       
       
        <motion.div className='mt-4 md:mt-0 text-center md:text-left' key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        >
          
      
          <h1 className= {`text-3xl md:text-5xl font-bold transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}> {sentences[index]} </h1>
          
        </motion.div>
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
          <a href='https://x.com/JainamShah2425' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-blue-300'><FaXTwitter /></a>
          <a href='https://leetcode.com/u/Jainam2425/' target='_blank' rel='noopener noreferrer' className='text-2xl hover:text-blue-300'><SiLeetcode/></a>
          
        
        </div>
        <div className='spline-container w-1/2 h-32'>
        <Spline 
        scene="https://prod.spline.design/kDG8QQ6qAm4kzRck/scene.splinecode" 
      />
      </div>
      </footer>
    </motion.div>
    
    </>
  );
};

export default Home;
