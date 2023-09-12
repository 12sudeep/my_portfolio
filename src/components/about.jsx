import CV from "../assets/SudeepFullel_cv.pdf"
import Don from "../assets/image_1.png"

const About = () => {

    const info = [
        { text: "Degree", count: "Data Science(Ongoing)" },
        { text: "Completed Projects", count: "5+" },
        { text: "College", count: "BCU" },
    ]

    return <section id="about" className="py-10 text-white">
        <div className="text-center mt-8">
            <h3 className="text-4xl font-semibold">
                About <span className="text-cyan-600">Me</span>
            </h3>
            <p className="text-gray-400 my-3 text-lg">
                My introduction
            </p>
            <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                <div>
                    <div className="text-gray-300 my-4">
                        <p>
                            It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                        </p>
                        <div className="flex mt-10 items-center gap-7">
                            {
                                info.map(col => (
                                    <div key={col.text}>
                                        <h3 className="md:text-3xl text-2xl font-semibold text-white">{col.count}</h3>
                                        <span className="">{col.text}</span>
                                    </div>

                                ))
                            }
                        </div>
                        <br />
                        <br />
                        <a href={CV} download>
                            <button className="btn-primary mt-5">Download CV</button>
                        </a>
                    </div>
                </div>
                <div className="flex-1 flex justify-center">
                    <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
                        <img src={Don} alt="don" className="w-full" />
                    </div>
                </div>

            </div>

        </div>

    </section>
};

export default About;