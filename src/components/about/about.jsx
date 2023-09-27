import CV from "../../assets/SudeepFullel_cv.pdf";
import Don from "../../assets/image_1.png";
import Title from "../layouts/title";
import { useTheme } from '../layouts/themeContext';

const About = () => {
    const { theme } = useTheme();
    const info = [
        { text: "Degree", count: "DataScience" },
        { text: "Completed Projects", count: "5+" },
        { text: "College", count: "BCU" },
    ];

    return (
        <section id="about" className="container mx-auto min-h-screen sm:py-20 py-10 ">
            <div className="text-center sm:mt-8 mt-16">
                <Title title="About Me" desc="My introduction" />
                <div className="flex flex-col-reverse lg:flex-row items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className="md:mt-0 mt-8">
                        <div className={`flex flex-col px-4 md:px-16 sm:my-4 text-center md:text-left text-${theme==="dark"?"gray-300":"black"}`}>
                            <p className="sm:text-xl text-sm">
                                It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                            </p>
                            <div className="flex mt-10 md:justify-start justify-center gap-7">
                                {info.map((col) => (
                                    <div key={col.text}>
                                        <h3 className="md:text-xl text-1xl font-semibold">{col.count}</h3>
                                        <span className="">{col.text}</span>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <br />
                            <a href={CV} download>
                                <button className="btn-primary hover:scale-95 sm:mt-5">Download CV</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center lg:pb-32 pb-0 justify-items-center">
                        <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
                            <img src={Don} alt="don" className="w-full" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
