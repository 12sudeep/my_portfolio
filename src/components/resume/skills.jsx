import React from 'react'
import ResumeCard from './resumeCard'

const Skills = () => {
    return (
        <div className='w-full flex justify-center gap-20'>
            <div>
                <div className="py-12 font-titlefont">
                    <p className="text-sm text-cyan-400 tracking-[4px]">Features</p>
                    <h2 className="text-2xl font-bold">Skills</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    <ResumeCard
                        title="BSc in Computer Science"
                        subTitle="BCu (2022 - 2026)"
                        result="3.90/4"
                        des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                    />
                    <ResumeCard
                        title="AS - Science & Information"
                        subTitle="SuperKing College (2011 - 2055)"
                        result="4.75/5"
                        des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
                    />
                    <ResumeCard
                        title="Secondary School Education"
                        subTitle="kist Secondary School (1998 - 2000)"
                        result="5.00/5"
                        des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                    />
                </div>
            </div></div>
    )
}

export default Skills