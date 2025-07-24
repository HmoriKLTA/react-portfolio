import ProjectDetails from '../components/ProjectDetails.jsx'
import { useState } from 'react'


const Project = ({title, description, subDescription, href, image, tags, setPreview, code, logo}) => {
    const [isHidden, setIsHidden] = useState(false);
  return (
    <>
    <div className='flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0 pr-0' onMouseEnter={() => setPreview(image)} onMouseLeave={() => setPreview(null)}  >
        <div>
        <p className="text-2xl">{title}</p>
        <p className="text-xl">{description}</p>
        </div>
    </div>
        <div className="flex justify-end items-end">
        <div className="flex items-end gap-5 mt-2 text-sand">
            {tags.map((tag) => (<span key={tag.id}>
                <img className="rounded-lg size-10 hover-animation"
                                key={tag.id}
                                src={tag.path}
                                alt={tag.name}
                                />
                </span>))}
        </div>
            <button onClick={() =>setIsHidden(true)}
                    className="ml-auto flex items-end justify-end gap-1 cursor-pointer hover-animation">
                Read More
                <img src="src/assets/arrow-right.svg" alt="" className="w-5"/>
            </button>
        </div>
    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
    {isHidden && (
        <ProjectDetails
            title={title}
            logo={logo}
            description={description}
            subDescription={subDescription}
            href={href}
            image={image}
            tags={tags}
            closeModal={() => setIsHidden(false)}
            code={code}
            />
        )}
    </>
  )
}

export default Project
