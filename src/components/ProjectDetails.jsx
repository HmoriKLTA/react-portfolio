import { motion } from 'motion/react'
import React from 'react'
import closeLogo from '../assets/logos/close.svg';
import { myProjects } from "../constants"
import { mySocials } from "../constants"
import tailwindcssLogo from '../assets/logos/tailwindcss.svg';
import css3Logo from '../assets/logos/css3.svg';
import html5Logo from '../assets/logos/html5.svg';
import javascriptLogo from '../assets/logos/javascript.svg';
import railsPlainLogo from '../assets/logos/rails-plain.svg';
import rubyOriginalLogo from '../assets/logos/ruby-original.svg';
import bootstrapOriginalLogo from '../assets/logos/bootstrap-original.svg';

const skillLogos = {
    "tailwindcss": tailwindcssLogo,
    "css3": css3Logo,
    "html5": html5Logo,
    "javascript": javascriptLogo,
    "rails-plain": railsPlainLogo,
    "ruby-original": rubyOriginalLogo,
    "bootstrap-original": bootstrapOriginalLogo
};

const ProjectDetails = ({
    title,
    logo,
    description,
    subDescription,
    href,
    image,
    tags,
    code,
    closeModal
}) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
        <motion.div className='relative max-w-2xl border shadow-sm rounded-2lx bg-gradient-to-l from-midnight to-navy border-white/10' initial={{opacity:0, scale:0.5}} animate={{ opacity:1, scale: 1}}>
            <button onClick= {closeModal}
                    className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500">
                <img src={closeLogo} className="w-6 h-6"alt="" />
            </button>
            <img src={image} className="w-full h-64 object-cover rounded-t 2xl" alt="" />
            <div className="p-5">
                <div className="flex items-center gap-4">
                    <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
                        {logo && <img src={logo} alt="" className="size-9" />}
                </div>
                <p className="mb-3 font-normal text-neutral-400">{description}</p>
                {subDescription.map((subDesc, index) => (
                    <p className="mb-3 font-normal text-neutral-400">{subDesc}</p>
                ))}
                <div className="flex items-center justify-between mt-4">
                    <div className='flex gap-3'>
                        {tags.map((tag)=>(
                            <img className="rounded-lg size-10 hover-animation"
                                key={tag.id}
                                src={tag.path}
                                alt={tag.name}
                                />
                        ))}
                    </div>
                    <div className='flex gap-3'>
                    <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                        href={code} >
                            Code
                        <img src="src/assets/socials/github-original.svg" alt="" className="size-4" href="" />
                    </a>
                    {href ? (
                      <a className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                        href={href} >
                            Online
                        <img src="src/assets/logos/arrow-up.svg" alt="" className="size-4" href="" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1 font-medium text-gray-400 cursor-not-allowed">
                        Offline
                        <img src="src/assets/logos/arrow-up.svg" alt="" className="size-4 opacity-50" />
                      </span>
                    )}
                    </div>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default ProjectDetails
