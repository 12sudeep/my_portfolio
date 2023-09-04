import { useEffect, useState } from "react";


const Navbar = () => {
    const [sticky,setSticky] =useState(false);

    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "Contact", link: "#contact" },
    ];

    useEffect(()=> {
        window.addEventListener("scroll",()=>{
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        })
    },[])
    return (
        <nav className={`fixed w-full left-0 top-0 z- [999] ${sticky ? "md:bg-cyan-500 text-gray-900" : "text-white"}`}>
            <div className="flex justify-between items-center">
                <div className="mx-7">
                    <h4 className="text-4xl uppercase font-bold">
                        <span className="text-[brown]">Su</span><span className="text-[brown] hover:text- transition duration-150 ease-in hover:ease-in-out ">deep</span>
                    </h4>
                </div>
                <div className="md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full">
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {
                            menuLinks?.map((menu, i) => (
                                <li key={i} className="px-6 text-[brown] hover:text-cyan-500">
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