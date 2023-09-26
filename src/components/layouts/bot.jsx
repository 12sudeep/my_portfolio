import React, { useState } from 'react';
import Popup from '../blog/popup';






const Bot = () => {
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState(null);


    const openPopup = () => {
        setSelectedBlog(null);
        setPopupVisible(true);
    };

    const closePopup = () => {
        setPopupVisible(false);
    };

    const handleGoToClick = (url) => {
        window.location.href = url;
    };

    return (
        <div className="container mx-auto">
            <div className="fixed flex flex-col gap-6 items-center justify-left bottom-[48px] sm:left-8 left-4 z-[999] text-white sm:text-2xl text-xl ">
                <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-125"><ion-icon name="logo-linkedin"></ion-icon></div>
                <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-125"><ion-icon name="logo-github"></ion-icon></div>
                <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-125"><ion-icon name="logo-instagram"></ion-icon></div>
                <ion-icon name="body-outline"></ion-icon>
            </div>
            <button
                className="fixed flex items-center justify-center rounded-full bottom-5 sm:right-8 right-4 z-[999] text-white cursor-pointer sm:text-4xl text-3xl bg-[brown] hover:bg-cyan-500 sm:w-16 w-14 sm:h-16 h-14 animate-bounce"
                onClick={openPopup}
            >
                <ion-icon name="logo-octocat"></ion-icon>
            </button>
            {isPopupVisible && (
                <Popup onClose={closePopup} onGoToClick={handleGoToClick} />
            )}
        </div>
    );
};

export default Bot;