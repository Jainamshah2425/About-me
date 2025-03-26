import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Project from './components/pages/Project'
import Experience from './components/pages/Experience'
import Contact from './components/pages/Contact'

function App() {
  return (
   
    <>
      
            <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/project" element={<Project/>}/>
        <Route path="/experience" element={<Experience/>}/>

       </Routes>
      
    </>

  )
}

export default App



// readme ,change contact to experience like winning case study comp hackathon add podcast as well,
// add social links,based in mumbai,
// need to add resume ,
// include three js component in website , 
// update detail like head of events,
// add project