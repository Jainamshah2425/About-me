import React,{useState} from 'react'
import pic from  '../assets/jainam1.jpeg'
import {motion} from 'framer-motion'


const Home = () => {
  const [activeTab, setActiveTab] = useState('skill'); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1,transition:{delay:0.5}}}
      className='w-full h-screen   bg-gradient-to-b from-black to-gray-900'>
       <img className='w-96 p-3  items-end ' src={pic} alt="photo"/>
      <motion.div 
      
      initial={{opacity:0}}
      animate={{opacity:1,transition:{delay:0.8}}}
      className='text-white flex  absolute top-20 right-8 left-96 bottom-64'>
       <h1 className='text-5xl items-center flex mx-5'>
        Hi,I am Jainam Shah an aspiring IT engineer.
       </h1>
       <p className='text-base flex  items-center absolute top-64 left-4'>
        Currently,I love programming in HTML,CSS,Javascript.I m learning backend with node.js and python simulataneuosly.I am passionate about learning new techonlogies        </p>

      </motion.div>
      <div className='h-32 absolute top-96 left-96 -bottom-1 right-8 flex items-center '>
       
       <button onClick={()=> handleTabClick('skill')} className='text-5xl relative left-12 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-3'>
        Skills 
       </button>
       <button  onClick={()=> handleTabClick('exp')} className='text-5xl absolute left-80 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  p-3'>
         Experience 
       </button>
       <button  onClick={()=> handleTabClick('edu')} className='text-5xl relative left-2/4 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 p-3'>
         Education
       </button>
      </div>
      <div className='text-white   flex '>
      {activeTab === 'skill' && (
          <motion.div 
          
          initial={{x:'-100vw',opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{duration:2}} 
          className='absolute top-3/4 left-96   text-3xl rounded-md bg-gradient-to-r   p-4'>
              <ul>
              <li>Frontend</li>
              
              <li>Mongo Db</li>
              <li>React</li>
              <li>Java </li>
              <li>Python(Basics)</li>
              <li>C Language </li>
              
            </ul>
          </motion.div>
        )}
          {activeTab === 'exp' &&(
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
          )}
        {activeTab === 'edu' && (
           <motion.div
           initial={{x:'-100vw',opacity:0}}
           animate={{x:0,opacity:1}}
           transition={{duration:1}} 
           className=' absolute  top-3/4 left-96 right-1/ text-3xl rounded-md bg-gradient-to-r   p-4'>
            <ul>
              <li>Shri S.K.I High School<br></br> <span className='text-xl'>
                (2006-2021)</span> </li>
              <li>K.C.College <span className='text-xl'>
                 <br></br>(2021-2023)</span></li>
              <li>Svkm's Dwarkadas J.Sanghvi College of Engineering<br></br><span className='text-xl'>(2023-present)
                </span> </li>
              
            </ul>
          </motion.div>
        )}
      </div>
           
      
</motion.div>


      
    </>
  )
}

export default Home
