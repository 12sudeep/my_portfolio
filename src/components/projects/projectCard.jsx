import React from 'react';

const ProjectCard = ({ src, name, link }) => {
  const handleGoToGitHub = () => {
    window.location.href = link;
  };

  return (
    <div className='container mx-auto w-11/12 bg-gray-200 hover:bg-white shadow-lg rounded-lg transition duration-300 ease-in-out hover:scale-110 cursor-pointer'>
      <img
        src={src}
        alt={name}
        className='object-cover'
      />
      <div className='py-5'>
        <div className='flex md:flex-row flex-col gap-4 sm:justify-between text-1xl mb-2 text-black sm:px-6 text-center'>
          <h2 className='text-xl font-bold'>{name}</h2>
          <button className='sm:w-20 self-center px-4 py-1 justify-center text-center bg-cyan-500 hover:bg-[cyan] text-white hover:text-black rounded' onClick={handleGoToGitHub}>
            Goto
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
