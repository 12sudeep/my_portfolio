import React from 'react';
import Title from '../layouts/title';
import ProjectCard from './projectCard';
import img1 from '..//../assets/hospital.webp';
import img2 from '..//../assets/uni.jpeg';
import img3 from '..//../assets/attend.jpeg';
import img4 from '..//../assets/data.jpeg';

const Project = () => {
    return (
        <div className='container mx-auto min-h-screen flex flex-col text-center justify-center pt-20 px-8 sm:py-20 py-10'>
            <Title title='Projects' desc='some projects done by me' />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-16 px-2 sm:px-10'>
                <ProjectCard src={img1} name='Hospital management system' />
                <ProjectCard src={img2} name='University Ranking system' />
                <ProjectCard src={img3} name='Face attendance project' />
                <ProjectCard src={img4} name='Data science website' />
            </div>
        </div>
    );
};

export default Project;
