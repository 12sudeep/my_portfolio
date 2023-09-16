import Title from "../layouts/title";
import ResumeCard from "./resumeCard";

const Resume = () => {
    return (
        <section id="resume" className="container mx-auto min-h-screen items-center py-10">
            <div className="flex justify-center items-center text-center">
                <Title title="Resume" desc="more about me" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-4">
                    <li className="resumeLi">Education</li>
                    <li className="resumeLi">Skills</li>
                    <li className="resumeLi">Experience</li>
                    <li className="resumeLi">Achievements</li>
                </ul>
            </div>
            <div className="py-12 font-titlefont">
                <p className="text-sm text-cyan-400 tracking-[4px]">2009-2023</p>
                <h2 className="text-2xl font-bold">Education Quality</h2>
            </div>
            <div className="flex flex-col gap-10 mt-14 w-1/2 h-[1000px] border-l-[6px] border-l-black border-opacity-30">
                <ResumeCard />
                <ResumeCard />
                <ResumeCard />
            </div>
        </section>
    );
}

export default Resume;