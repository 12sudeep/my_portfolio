import React from 'react';

const Footer = () => {
  return (
    <footer className="flex max-w-screen bg-[#1E1E1E] drop-shadow-xl py-8 text-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap flex-col-reverse sm:flex-row justify-between text-center gap-8">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6 sm:mb-0">
            <h2 className="text-2xl font-bold mb-4">@Copyright 2023</h2>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-6 sm:mb-0 px-6 sm:px-14">
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-sm text-gray-400">Kalopul</p>
            <p className="text-sm text-gray-400">Kathmandu, nepal</p>
            <p className="text-sm text-gray-400">Email: fullelsudeep@gmail.com</p>
            <p className="text-sm text-gray-400">Phone: 9840041838</p>
          </div>

          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="text-gray-400 hover:text-white">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
