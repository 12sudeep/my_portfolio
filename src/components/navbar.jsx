import { useEffect, useState } from "react";
import LOGO from "../assets/Union.svg"
import { Link } from "react-router-dom";


const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);

    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CONTACT", link: "#contact" },
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
        <nav className="fixed w-full left-0 top-0 z-[999] bg-[#1E1E1E] drop-shadow-xl">
            <div className="flex h-[90px] justify-between items-center lg:px-36 px-8">
                <div className="w-11 cursor-pointer ">
                    <Link to="#home">
                    <img src={LOGO} alt="logo" />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)}
                    className={`z-[999] ${open ? "text-black hover:text-cyan-500" : "text:black-900"} text-5xl md:hidden my-3 `}>
                    <ion-icon name="menu-outline"></ion-icon>
                </div>
                <div className={`md:hidden absolute w-2/3 h-screen px-8 py-2 font-medium bg-white top-0 right-0 transition-all duration-700  ${open ? "right-0" : "right-[-100%]"}`}>
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {
                            menuLinks?.map((menu, i) => (
                                <li key={i} className="px-7 text-black hover:text-cyan-500 my-2">
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="md:block hidden lg:px-7 py-2 font-medium">
                    <ul className="flex items-center gap-1 py-2 lg:text-lg">
                        {
                            menuLinks?.map((menu, i) => (
                                <li key={i} className="lg:px-7 px-5 text-base text-white hover:underline underline-offset-8 decoration-[cyan]">
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