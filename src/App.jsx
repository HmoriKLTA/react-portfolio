import React from 'react'
import Navbar  from "./sections/Navbar.jsx"
import Hero from "./sections/Hero.jsx"
import About from "./sections/About.jsx"

const App = () => {
  return (
    <div className='container mx-auto max-w-7xl'>
      <Navbar />   
      <Hero />
      <About />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />
      <section className="min-h-screen" />

      {/*projects*/}
      {/*experience*/}
      {/*testimonials*/}
      {/*contact*/}
      {/*footer*/}  

      <div className='text-center text-2xl font-bold mt-10'>Welcome to the React 18 + Vite + Tailwind CSS + TypeScript Template</div>
      App hello</div>
  )
}

export default App