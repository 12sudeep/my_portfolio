import React from 'react';
import { motion } from 'framer-motion';
import github from '../../assets/github.png';
import javascript from '../../assets/javascript.png';
import react from '../../assets/react.png';
import html from '../../assets/html.png';
import tailwind from '../../assets/tailwind.png';
import css from '../../assets/css.png';
import python from '../../assets/python.png';
import numpy from '../../assets/numpy.png';
import pandas from '../../assets/pandas.png';

const images = [github, javascript, react, html, tailwind, css, python, numpy, pandas];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="w-full lg:w-1/2">
        <div className="py-12 font-titlefont">
          <p className="text-sm text-cyan-400 tracking-[4px]">Features</p>
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        <div className="flex flex-wrap justify-start gap-4 lg:gap-8">
          {images.map((item, index) => (
            <div key={index} className="w-20 h-20 flex items-center">
              <img src={item} alt="" className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
