import React from 'react'
import { motion } from 'framer-motion'
import award from "../../assets/award.svg"
import ResumeCard from './resumeCard'


const Achievement = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="py-12 font-titleFont flex gap-20"
        >
            <div className='w-full flex-col justify-center gap-20 px-11'>
                <div className="flex flex-col font-titlefont justify-center items-center gap-4">
                    <p className="text-sm text-cyan-400 tracking-[4px]">Awards</p>
                    <h2 className="text-2xl font-bold">Achievements</h2>
                </div>
                <div className='py-10 lgl:mt-14 w-full h-full flex md:flex-row flex-col gap-32 items-center'>
                    <div className='sm:pb-28 pb-0'><img src={award} alt="" className='w-40 h-40 flex justify-center items-center hover:scale-95' /></div>
                    <div className="mt-6 lgl:mt-14 w-full flex flex-col gap-10">
                        <ResumeCard
                            title="BSc in Computer Science"
                            subTitle="BCu (2022 - 2026)"
                            result="3.90/4"
                            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture.The training provided by universities in order to prepare people to work in various sectors of the economy or areas of cultureThe training provided by universities in order to prepare people to work in various sectors of the economy or areas of cultureThe training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture"
                        /></div>
                    </div>

            </div>
        </motion.div>
    )
}

export default Achievement