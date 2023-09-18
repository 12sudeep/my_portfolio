import { useState } from "react";
import Title from "../layouts/title";
import Education from "./education";
import Skills from "./skills";
import Achievement from "./achievement";
import Experience from "./experience";

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [experienceData, setExperienceData] = useState(false);
    const [achievementData, setAchievementData] = useState(false);



    return (
        <section id="resume" className="container mx-auto min-h-screen items-center py-10">
            <div className="flex justify-center items-center text-center">
                <Title title="Resume" desc="more about me" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-4">
                    <li onClick={() =>
                        setEducationData(true) &
                        setSkillData(false) &
                        setExperienceData(false) &
                        setAchievementData(false)}
                        className={`${educationData
                                ? "border-[cyan] rounded-lg"
                                : "border-transparent"
                            } resumeLi`}>Education</li>
                    <li onClick={() =>
                        setEducationData(false) &
                        setSkillData(true) &
                        setExperienceData(false) &
                        setAchievementData(false)}
                        className={`${skillData
                                ? "border-[cyan] rounded-lg"
                                : "border-transparent"
                            } resumeLi`}>Skills</li>
                    <li onClick={() =>
                        setEducationData(false) &
                        setSkillData(false) &
                        setExperienceData(true) &
                        setAchievementData(false)}
                        className={`${experienceData
                                ? "border-[cyan] rounded-xl"
                                : "border-transparent"
                            } resumeLi`}>Experience</li>
                    <li onClick={() =>
                        setEducationData(false) &
                        setSkillData(false) &
                        setExperienceData(false) &
                        setAchievementData(true)}
                        className={`${achievementData
                                ? "border-[cyan] rounded-lg"
                                : "border-transparent"
                            } resumeLi`}>Achievements</li>
                </ul>
            </div>

            {educationData && <Education />}
            {skillData && <Skills />}
            {achievementData && <Achievement />}
            {experienceData && <Experience />}

        </section>
    );
}

export default Resume;