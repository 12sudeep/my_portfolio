import React, { useState } from "react";
import Title from "../layouts/title";
import Education from "./education";
import Skills from "./skills";
import Achievement from "./achievement";
import Experience from "./experience";
import { useTheme } from '../layouts/themeContext';

const Resume = () => {
    const { theme } = useTheme();
    const sections = [
        { id: "education", title: "Education", component: <Education /> },
        { id: "skills", title: "Skills", component: <Skills /> },
        { id: "experience", title: "Experience", component: <Experience /> },
        { id: "achievements", title: "Achievements", component: <Achievement /> },
    ];

    const [activeSection, setActiveSection] = useState("education");

    return (
        <section id="resume" className="container mx-auto min-h-screen items-center sm:py-20 py-10">
            <div className="text-center sm:mt-8 mt-16">
                <Title title="Resume" desc="more about me" />
                <div>
                    <ul className="w-full grid grid-cols-2 md:grid-cols-4 px-14 sm:px-20 lg:px-14">
                        {sections.map((section) => (
                            <li
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`${activeSection === section.id ? "border-[cyan] rounded-lg" : "border-transparent"
                                    } ${theme==="dark"?"resumeLi-white" : "resumeLi-black"}`}
                            >
                                {section.title}
                            </li>
                        ))}
                    </ul>
                </div>

                {sections.map((section) => (
                    <div key={section.id} id={section.id} style={{ display: activeSection === section.id ? "block" : "none" }}>
                        {section.component}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Resume;
