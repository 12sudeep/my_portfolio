import React from 'react'

const ProjectCard = ({src}) => {
  return (
    <div className='flex w-full h-40 group'> 
<img src={src} alt="" />
    </div>
  )
}

export default ProjectCard