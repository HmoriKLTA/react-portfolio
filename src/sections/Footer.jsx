import { mySocials } from "../constants"
import React from 'react'

const Footer = () => {
  return (
    <section className="flex flex-wrap flex-col items-center justify-center gap-5 pb-3 text-sm text-neutral-400 c-space">
        <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full">
            <div className="flex gap-2">

            </div>
        </div>
        <div className="w-full flex justify-center">
  <div className="flex gap-3">
    {mySocials.map((social, index) => (
      <a href={social.href} key={index}>
        <img src={social.icon} className="w-5 h-5" alt={social.name} />
      </a>
    ))}
  </div>
</div>
    </section>
  )
}

export default Footer
