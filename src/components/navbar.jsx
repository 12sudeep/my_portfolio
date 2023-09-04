import { useEffect, useState } from "react";
import LOGO from "../assets/logo.webp"


const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);

    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setOpen(false);

            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);
    return (
        <nav className={`fixed w-full left-0 top-0 z- [999] ${sticky ? "textgray-900" : "text-white"}`}>
            <div className="flex justify-between items-center">
                <div className="w-20 md:w-[100px] md:mx-8 rotate-[28.56deg] cursor-pointer">
                    <img onClick="#" src={LOGO} alt="logo" />
                </div>
                <div onClick={() => setOpen(!open)}
                    className={`z-[999] ${open ? "text-black" : "text:black-900"} text-5xl md:hidden m-5`}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
                <div className={`md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 right-0 duration-400 ${open ? "right-0" : "right-[-100%]"}`}>
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {
                            menuLinks?.map((menu, i) => (
                                <li key={i} className="px-7 text-[brown] hover:text-cyan-500 my-2">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full">
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {
                            menuLinks?.map((menu, i) => (
                                <li key={i} className="px-7 text-[brown] hover:text-cyan-500 my-2">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;