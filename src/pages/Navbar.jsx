import { useEffect } from "react";
import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export default function Navbar({onReservation,onAbout,onHome,onSkills,onProject,onContact,current}){

    const [moved,setMoved]=useState(false);
    const [isOpen,setIsOpen]=useState(false);
    const [menuOpen,setMenuOpen]=useState(false);

    const toggleDropdown=()=>setIsOpen(!isOpen);
    const toggleMenu=()=>setMenuOpen(!menuOpen);
    const closeMenu=()=>setMenuOpen(false);
    const getStyle=(id)=>current===id ? 'text-[DodgerBlue] font-semibold':'text-white';

    useEffect(()=>{
        const handleMove=()=>setMoved(window.scrollY>0);
        window.addEventListener('scroll', handleMove);
        return()=>window.removeEventListener('scroll', handleMove);
    },[])


    return(
        <div className={`text-white fixed w-full top-0 flex items-center z-50 ${moved ? 'bg-gray-800' :''}`}>
            <div className="flex items-center md:pl-10 py-3 pl-3">
                <span className=" cursor-pointer font-bold flex items-center"><SiGithub className="mr-2 text-3xl"/>Github</span>
            </div>
            <div className="flex-grow"></div>
            
            <button className="text-xl lg:hidden border rounded mr-4 p-1 overflow-hidden cursor-pointer" onClick={toggleMenu}>{menuOpen ? <FaTimes/> : <FaBars/>}</button>

            <nav className={`absolute mr-8 lg:relative lg:flex wrap lg:items-center lg:w-auto w-full top-12 lg:top-0 lg:right-0 left-0 lg:bg-transparent lg:block bg-gray-800 md:justify-end transition-all duration-500 mt-2 ease-in-out ${menuOpen ? 'menu-open' : 'hidden'}`}>
                <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-y-6 lg:gap-x-5 p-4 mt-2 md:ml-0 lg:p-0">
                    <p onClick={()=>{onHome(); closeMenu();}} 
                        className={` cursor-pointer hover:text-[DodgerBlue] ${getStyle('home')}`}>
                        Home
                    </p>
                    <p onClick={()=>{onAbout();closeMenu()}} 
                        className={` cursor-pointer hover:text-[DodgerBlue] ${getStyle('about')}`}>
                        About
                    </p>
                    <p onClick={()=>{onSkills(); closeMenu();}}
                        className={` cursor-pointer hover:text-[DodgerBlue] ${getStyle('skills')}`}>
                        Skills
                    </p>
                    <p onClick={()=>{onProject(); closeMenu();}}
                        className={` cursor-pointer hover:text-[DodgerBlue] ${getStyle('project')}`}>
                        Projects
                    </p>
                    <p onClick={()=>{onContact(); closeMenu();}}
                        className={` cursor-pointer hover:text-[DodgerBlue] ${getStyle('contact')}`}>
                        Contact
                    </p>
                </ul>
            </nav>
        </div>
    )
}