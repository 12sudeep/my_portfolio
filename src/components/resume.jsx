import Title from "./layouts/title";

const Resume = () => {
    return (
        <section id="resume" className="container mx-auto min-h-screen items-center py-10">
            <div className="flex justify-center items-center text-center">
                <Title title="Resume" desc="more about me" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-4">
                    <li className="">Education</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Achievements</li>
                </ul>
            </div>
        </section>
    );
}

export default Resume;