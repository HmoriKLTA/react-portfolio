import React from 'react'
import Navbar  from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"
import Projects from "./sections/Projects.jsx"
import Footer from "./sections/Footer.jsx"

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />   
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App