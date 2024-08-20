import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import {Route, Routes } from 'react-router-dom'
import Contact from './components/pages/Contact'
import Project from './components/pages/Project'

function App() {


  return (
    <>
    
        <Navbar/>
       <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project" element={<Project/>}/>
       </Routes>
    </>
  )
}

export default App
