import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animate from "../../assets/hello4.json"
import React, { useRef } from "react";
import { useTypewriter } from "react-simple-typewriter";
import { useTheme } from '../layouts/themeContext';


const Hero = () => {
    const { theme } = useTheme();
    const phoneRef = useRef(null); // eslint-disable-next-line
    const [text] = useTypewriter({
        words: ["Data Science Enthusiastic.", "Bachelor Student.", "Friendly Guy."],
        loop: true,
        typeSpeed: 80,
        deleteSpeed: 80,
        delaySpeed: 2000,
    });

    return (
        <section id="home" className={`container mx-auto min-h-screen flex lg:flex-row sm:py-20 py-10 flex-col sm:px-11 px-8 items-center text-${theme==="dark"?"white" : "black"}`}>
            <div className="flex-1 sm:pt-2 pt-8">
                <Lottie
                    lottieRef={phoneRef}
                    loop={false}
                    animationData={animate} />
            </div>
            <div className="flex-1">
                <div className="py-5 md:text-6xl text-3xl text-center">
                    <h1>I am Sudeep Fullel</h1>
                </div>
                <div className="py-5 sm:text-3xl text-xl text-center">
                    A <span>{text}</span>
                </div>
                <a href="#contact" ><div className="flex py-4 sm:text-3xl text-2xl text-[cyan] justify-center">
                    <h3 className="lg:absolute bottom-32">Let's connect....</h3>
                </div></a>

            </div>
        </section>
    )
}

export default Hero;