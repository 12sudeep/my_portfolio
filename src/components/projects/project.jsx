import React from 'react'
import Title from '../layouts/title'
import ProjectCard from './projectCard'
import img1 from "..//../assets/hospital-management-system-fb.png"
import img2 from "..//../assets/uni.jpg"
import img3 from "..//../assets/face_attendence.jpg"
import img4 from "..//../assets/ds.webp"

const Project = () => {
    return (
        <div className='container mx-auto min-h-screen flex lg:flex-col md:pt-2 pt-20 flex-col sm:px-28 px-8 items-center text-center'>
            <div><Title title="Projects" desc="some projects done by me" />
            </div>
            <div className='grid lg:grid-cols-2 grid-cols gap-20 items-center'>
                <ProjectCard src={img1} />
                <ProjectCard src={img2} />
                <ProjectCard src={img3} />
                <ProjectCard src={img4} />

            </div>
        </div>
    )
}

export default Project