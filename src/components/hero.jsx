import hero from "../assets/image_1.png"

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col py-20 items-center">
            <div className="py-3 pt-28 text-5xl font-bold">
                <h1>SUDEEP FULLEL</h1>
            </div>
            <div className="py-3 text-3xl">
                <h3>Data Science Enthusiastic</h3>
            </div>
            <div className="px-[20rem] py-4">
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </p>
            </div>
            <div className="flex flex-row gap-[4rem] py-4 text-5xl">
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-github"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            </div>
            <div>
                <img src={hero} alt="hero" className="w-[25rem]"></img>
            </div>
        </section>
    )
}

export default Hero;