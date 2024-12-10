import React from 'react'
import Image from 'next/image'
import { StaticImageData } from "next/image";
import { GoArrowUpRight } from "react-icons/go";

interface Project {
    title: string
    subtitle: string
    image: string | StaticImageData; // Allow both string (for URLs) and StaticImageData (for imports)
  }
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="space-y-4">
    <div className="flex  justify-between">
      <div className='w-[200px] group'>
        <h3 className="text-white text-lg group-hover:text-[#4848FF] duration-700 lg:text-2xl font-semibold">{project.title}</h3>
        <p className="group-hover:text-white duration-700 text-gray-400 mt-1">{project.subtitle}</p>
      </div>
      <button className="bg-[#4848FF] p-3 h-12  rounded-full">
        <GoArrowUpRight className="w-6 h-6 text-white" />
      </button>
    </div>
    <Image
      src={project.image}
      alt={project.title}
      width={800}
      height={600}
      className="w-full h-auto"
    />
  </div>
  )
}

export default ProjectCard
