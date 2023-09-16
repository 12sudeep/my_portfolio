const Bot = () => {
    return (
        <div className="container mx-auto">
            <div className="fixed flex flex-col gap-6 items-center justify-left bottom-[48px] sm:left-8 left-4 z-[999] text-white sm:text-2xl text-xl ">
                <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-125"><ion-icon name="logo-linkedin"></ion-icon></div>
                <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-125"><ion-icon name="logo-github"></ion-icon></div>
                <div className="cursor-pointer transition duration-300 ease-in-out hover:scale-125"><ion-icon name="logo-instagram"></ion-icon></div>
                <ion-icon name="body-outline"></ion-icon>
            </div>
            <div className="fixed flex items-center justify-center rounded-full bottom-5 sm:right-8 right-4 z-[999] text-white cursor-pointer sm:text-4xl text-3xl bg-[brown] hover:bg-cyan-500 sm:w-16 w-14 sm:h-16 h-14 animate-bounce">
                <ion-icon name="logo-octocat"></ion-icon>
            </div>
        </div>
    );
};

export default Bot;