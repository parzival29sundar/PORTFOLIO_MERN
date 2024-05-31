import React from 'react'
import SectionTitle from '../../coponents/SectionTitle'
import { useSelector } from 'react-redux';


function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
    const {portfolioData } = useSelector((state) => state.root);
    const {projects} = portfolioData;
  return (
    <div>
        <SectionTitle title="Projects"/>
        <div className="flex py-5 gap-[240px] sm:flex-col">
            <div className="flex flex-col gap-20 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 
                             ${
                               selectedItemIndex === index
                                 ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#46ceb12c] py-3 sm:w-40"
                                 : "text-white"
                             }`}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className='flex items-center justify-center gap-10 sm:flex-col sm:w-full'>
            <img src={projects[selectedItemIndex].image} alt="" className='h-60 w-80 sm:h-60 sm:w-60 sm:mt-[-160px]'/>
        <div className="flex flex-col gap-5 w-[240%] sm:w-full ">
          <h1 className="text-secondary text-5xl">
            {projects[selectedItemIndex].title}
          </h1>
          <p className='text-white text-2xl'>{projects[selectedItemIndex].description}</p>
          
        </div>
        </div>
      </div>
    </div>
  )
}

export default Projects