import React, { useRef } from 'react'
import Card from '../components/Card.jsx'
import Globe from "../components/globe.jsx"
import Icons from '../components/Icons.jsx'


const About = () => {
    const grid2Container = useRef();
  return ( 
    <section className="c-space section-spacing">
        <h2 className='text-heading'>About Me</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
            {/* {Grid 1} */}
            <div className="flex items-end grid-default-color grid-1">
                <img src="./src/assets/coding-pov.png" className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale[3] md:left-50 md:inset-y lg:scale-[2.5]" alt="" />
                <div className='z-10'>
                    <p className="headtext"> Hi, I'm Hayao Mori</p>
                    <p className='subtext'>Recent Graduate from Le Wagon Tokyo. </p>
                </div>
                <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
            </div>
            {/* {Grid 2} */}
            <div className="grid-default-color grid-2">
            <div ref={grid2Container} className="flex items-center justify-center w-full h-full" style={{ position: 'relative', overflow: 'hidden' }}>
                <p className="flex items-end text-5xl text-gray-500">Tech Stack</p>
                <Icons />
                </div>
            </div>
            {/* {Grid 3} */}
            <div className="grid-black-color grid-3">
                <div className="z-10 w-[50%]">
                    <p className="headtext">Time Zone</p>
                    <p className="subtext">I'm based in Tokyo</p>
                </div>
                <figure className="absolute left-[30%] top-[10%]"><Globe /></figure>
            </div>
            {/* {Grid 4} */}
            <div className="grid-special-color grid-4">
                <div className="flex flex-col items-center justify-center gap-4 size-full">
                    <p className="text-center headtext">Do you want to start a project together</p>
                </div>
            </div>
            {/* {Grid 5} */}
            <div className="grid-default-color grid-5">
            </div>

        </div>
    </section>
  )
}

export default About;