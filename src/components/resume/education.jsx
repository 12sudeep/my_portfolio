import React from 'react';
import ResumeCard from './resumeCard';
import { motion } from 'framer-motion';
import { useTheme } from '../layouts/themeContext';

const Education = () => {
    const { theme } = useTheme();
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
        >
            <div className="w-full flex flex-col justify-center gap-10 px-14 sm:px-20 lg:px-14">
                <div>
                    <div className="py-12 font-titlefont text-center sm:text-left">
                        <p className="text-sm text-cyan-400 tracking-[4px]">2009-2023</p>
                        <h2 className={`text-2xl font-bold text-${theme==="dark"?"white" : "black"}`}>Education Quality</h2>
                    </div>
                    <div className="mt-6 lg:mt-14 w-full sm:border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-6 sm:gap-10">
                        <ResumeCard
                            title="BSc in Computer Science"
                            subTitle="BCU (2022 - 2026)"
                            result="--"
                            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                        />
                        <ResumeCard
                            title="Higher Secondary Education"
                            subTitle="kist College and SS"
                            result="3.54 GPA"
                            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                        />
                        <ResumeCard
                            title="Secondary School Education"
                            subTitle="Shree Resunga Secondary school"
                            result="4.00 GPA"
                            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Education;
