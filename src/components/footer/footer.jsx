import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const Footer = () => {
  const [text] = useTypewriter({
    words: ["until you're ready to Code", " until you're ready to Work"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 80,
    delaySpeed: 2000,
  });

  return (
    <footer className="bg-[#1E1E1E] text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-normal items-center px-6 gap-11">
        <div className="md:w-3/5 text-center md:text-right">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0">
            <div className="container mx-auto text-center text-sm text-gray-400 mt-4">
              <span className="block">&copy; {new Date().getFullYear()}. All rights reserved.</span>
              <span className="block mt-2">
                <a href="/terms" className="text-gray-400 hover:text-teal-400">Terms</a> ·{" "}
                <a href="/privacy" className="text-gray-400 hover:text-teal-400">Privacy Policy</a>
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 text-center md:text-left mb-4 md:mb-0 px-11">
          <h1 className="text-4xl font-semibold leading-normal">
            <span className="text-teal-400">Free</span> {" "}
            <span>{text}</span>
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
