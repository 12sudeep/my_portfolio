import React from 'react'
import ResumeCard from './resumeCard'
import { motion } from 'framer-motion'
import { useTheme } from '../layouts/themeContext';


const Experience = () => {
    const { theme } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div className='w-full flex md:flex-row flex-col justify-center gap-2 px-14 sm:px-20 lg:px-14'>
                <div className='flex-1'>
                    <div className="py-12 font-titlefont text-center sm:text-left">
                        <p className="text-sm text-cyan-400 tracking-[4px]">August,2023-present</p>
                        <h2 className={`text-2xl font-bold text-${theme==="dark"?"white" : "black"}`}>Work Experience</h2>
                    </div>
                    <div className="mt-6 lgl:mt-14 w-full sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 justify-center">
                        <ResumeCard
                            title="Research Assistant"
                            subTitle="Sunway college, kathmandu"
                            result=""
                            des=" As a research assistant at Sunway, my responsibilities include supporting ongoing research projects, conducting literature reviews, gathering and analyzing data, assisting with experiments and surveys, and collaborating closely with researchers and faculty members. I contribute to the research process by providing valuable insights, generating reports, and assisting in the preparation of research papers and presentations. My role at Sunway involves a strong commitment to the advancement of knowledge and the pursuit of innovative solutions in various academic disciplines"
                        />
                    </div>
                </div>
                <div className='flex-1'>
                    <div className="py-12 font-titlefont text-center sm:text-left">
                        <p className="text-sm text-cyan-400 tracking-[4px]">2022-present</p>
                        <h2 className="text-2xl font-bold">Volunteer Experience</h2>
                    </div>
                    <div className="mt-6 lgl:mt-14 w-full h-[85%] sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 justify-center">
                        <ResumeCard
                            title="Executive Member"
                            subTitle="Sunway Student Reprentative Council"
                            result=""
                            des="As a member of the Sunway Student Representative Council (SRC) executive team, I play a crucial role in representing and advocating for the student body's interests and concerns. My responsibilities include organizing and leading meetings and discussions to address student issues, collaborating with university administration to implement positive changes, and serving as a liaison between students and faculty or staff."
                        />
                        <ResumeCard
                            title="General Member"
                            subTitle="Rotract Club of Budhanilkantha"
                            result=""
                            des="As a general member of a Rotaract, my role involves actively participating in various community service projects, events, and activities aimed at making a positive impact on society. I collaborate with fellow Rotaractors and club leaders to plan, organize, and execute service initiatives that address local and global needs."
                        />
                    </div>
                </div>
                </div>
        </motion.div>
    );
}

export default Experience