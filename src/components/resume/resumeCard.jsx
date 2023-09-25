import React from 'react';

const ResumeCard = ({ title, subTitle, result, des }) => {
  return (
    <div className='flex w-full h-full group'>
      <div className='sm:w-10 h-[6px] bgOpacity mt-16 sm:relative '>
        <span className='flex justify-center items-center absolute w-5 h-5 rounded-full -top-2 -left-3 bg-black bg-opacity-60'>
          <span className='w-3 h-3 bg-[#262626] rounded-full inline-flex group-hover:bg-[cyan] duration-300'></span>
        </span>
      </div>
      <div className="flex flex-col justify-center gap-4 sm:gap-6 lg:gap-10 w-full sm:w-[80%] p-4 sm:p-11 bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg lg:px-10 shadow-shadowOne">
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-4 lg:gap-0 lg:items-center">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
              {title}
            </h3>
            <p className="text-xs sm:text-sm mt-1 sm:mt-2 text-gray-400 group-hover:text-white duration-300">
              {subTitle}
            </p>
          </div>
          <div>
            <p className="px-2 py-1 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-xs sm:text-sm font-medium">
              {result}
            </p>
          </div>
        </div>
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
          {des}
        </p>
      </div>
    </div>
  );
};

export default ResumeCard;
