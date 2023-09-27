import React from 'react'
import { motion } from 'framer-motion'
import award from "../../assets/award.svg"
import ResumeCard from './resumeCard'
import { useTheme } from '../layouts/themeContext';

const Achievement = () => {
    const { theme } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div className='w-full flex-col justify-center px-14 sm:px-20 lg:px-14'>
                <div className="flex flex-col font-titlefont justify-center items-center gap-4">
                    <p className="text-sm text-cyan-400 tracking-[4px]">Awards</p>
                    <h2 className={`text-2xl font-bold text-${theme==="dark"?"white" : "black"}`}>Achievements</h2>
                </div>
                <div className='py-10 lgl:mt-14 w-full h-full flex md:flex-row flex-col lg:gap-32 gap-10 items-center text-center'>
                    <div className='md:pb-[500px] lg:pb-28 pb-0'><img src={award} alt="win" className='w-40 h-40 flex justify-center items-center hover:scale-95' /></div>
                    <div className="mt-0 lgl:mt-14 w-full flex flex-col md:pl-8">
                        <ResumeCard
                            title="Young Scientist Award"
                            subTitle="Issued by Brainycube Research Organization"
                            result="Jul 2023"
                            des="
                            our team was awarded the prestigious Young Scientist Award at NYSS 2023. This recognition is a testament to the hard work, dedication, and innovative spirit of our entire team.
                            Our project, the 'Emergency Vehicle Management System,' was recognized for its groundbreaking approach in revolutionizing emergency response management. This achievement would not have been possible without the invaluable support and funding from Sunway College Kathmandu, which played a crucial role in the success of our endeavour."                        /></div>
                </div>

            </div>
        </motion.div>
    )
}

export default Achievement