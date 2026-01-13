import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div >
      <NavBar/>
     
        <Hero/>
        <About />
        <Projects />
        <Contact />
      
      <Footer />
    </div>
  )
}
