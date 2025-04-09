import React from 'react'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'
import Spline from '@splinetool/react-spline';

const Experience = () => {
  const experiences = [
    {
      title: "Runner-Up at Catnip Infotech Pvt Ltd Hackathon",
      description: "Led a team of 4 to win XYZ Hackathon 2024. Developed an innovative solution for [problem] using React and Node.js.",
      image: "/path-to-hackathon-image.jpg" ,
      learnMore:"https://www.linkedin.com/in/jainam-shah-0a1410244/"

    },
    {
      title: "Tech Podcast Host",
      description: "Hosted a weekly tech podcast discussing emerging technologies and interviewing industry experts. Reached 10k+ listeners.",
      image: "/path-to-podcast-image.jpg",
      learnMore:"https://www.youtube.com/watch?v=8cHAQ-ukWBs&list=PLdbymSKhrFhXMMNb7mbbSCRWMEOwiCsiP&index=2" // Add your image path here
    },
    {
      title: "Business Competition Winner",
      description: "First Place at Startup-Soulmate hosted by VJTI E-CELL.",
      image: "/path-to-business-image.jpg",
      learnMore:"https://www.linkedin.com/feed/update/urn:li:activity:7303428897809817603/" // Add your image path here
    },
    {
      title: "Business Competition Winner",
      description: "First Runner-up at Capital Clash hosted by IIC-DJSCE.",
      image: "/path-to-business-image.jpg",
      learnMore:"https://www.linkedin.com/in/jainam-shah-0a1410244/" // Add your image path here
    }

  ]

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-900 text-white p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Experience</h1>
      
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                       gap-8 items-center bg-gray-800/50 rounded-xl p-6 md:p-8`}
          >
            <div className="w-full md:w-1/2">
              <img 
                src={exp.image} 
                alt={exp.title}
                className="rounded-lg w-full h-64 object-cover shadow-xl"
              />
            </div>
            
            <div className="w-full md:w-1/2 space-y-4 relative min-h-[300px]"> {/* Added min-height and relative positioning */}
              <h2 className="text-2xl md:text-3xl font-bold text-blue-400">
                {exp.title}
              </h2>
              <p className="text-gray-300 text-lg">
                {exp.description}
              </p>
              <motion.a
                href={exp.learnMore}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative top-24 px-4 py-4 bg-blue-600 rounded-full text-white font-semibold 
                          hover:bg-blue-700 transition-colors"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        ))}
        
      </div>
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
       
    </div>
  )
}

export default Experience