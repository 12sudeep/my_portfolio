import React from 'react';
import Title from '../layouts/title';
import ProjectCard from './projectCard';
import img1 from '..//../assets/hospital.webp';
import img2 from '..//../assets/uni.jpeg';
import img3 from '..//../assets/attend.jpeg';
import img4 from '..//../assets/data.jpeg';
import { useTheme } from '../layouts/themeContext';

const Project = () => {
    const projects = [
        { src: img1, name: 'Hospital Management System' },
        { src: img2, name: 'University Ranking System' },
        { src: img3, name: 'Face Attendance Project' },
        { src: img4, name: 'Data Science Website' },
    ];

    return (
        <section id="projects" className="container mx-auto min-h-screen sm:py-20 py-10 text-white px-10 sm:px-12 lg:px-14">
            <div className="text-center sm:mt-8 mt-16">
                <Title title="Projects" desc="Some projects done by me" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-2 sm:px-10">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} src={project.src} name={project.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
