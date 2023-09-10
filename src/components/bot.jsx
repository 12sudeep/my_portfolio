const Bot = () => {
    return (
        <div>
            <div className="fixed flex flex-col gap-6 items-center justify-left bottom-12 sm:left-8 left-4 z-[999] text-white cursor-pointer text-2xl ">
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="body-outline"></ion-icon>
            </div>
            <div className="fixed flex items-center justify-center rounded-full bottom-5 sm:right-8 right-4 z-[999] text-white cursor-pointer text-4xl bg-[brown] hover:bg-cyan-500 w-16 h-16 animate-bounce">
                <ion-icon name="logo-octocat"></ion-icon>
            </div>
        </div>
    );
};

export default Bot;