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
import sql from '../../assets//sql-server-icon-png-11359.png';

const images = [github, javascript, react, html, tailwind, css, python, numpy, pandas,sql];

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col lg:flex-row gap-10 lg:gap-20"
    >
      <div className="w-full">
        <div className="py-12 font-titlefont text-center">
          <p className="text-sm text-cyan-400 tracking-[4px]">Features</p>
          <h2 className="text-2xl font-bold">Skills</h2>
        </div>
        <div className="flex flex-row justify-center gap-4 lg:gap-10 py-10">
          <div className="grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-12 items-center text-center">
            {images.map((item, index) => (
              <img
                key={index}
                src={item}
                alt=""
                className="w-24 h-auto hover:scale-110" 
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
