// Navbar2.js
import keslogo from "./keslogo.png"
import kiitlogo from "./kiit_logo.png"
// import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function NavbarHome() {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return (
        <nav className="mx-auto bg-transparent sticky box-shadow1 z-50 top-5 mb-8 w-[63%] md:h-16 h-16 items-center text-center md:justify-between rounded-full md:text-sm md:font-bold">
            <div className="md:flex justify-between md:pt-1">
                <div className="flex justify-between md:w-full md:justify-between px-16">
                    <div className="flex w-full md:justify-between">
                        <div>
                            <ul className="md:flex">
                                <li><img className="md:h-[50px] text-shadow1 box-shadow1 bg-transparent rounded-full py-[5px] mr-5 ml-[8px] mt-[3.5px] md:flex hidden justify-center" src={kiitlogo} alt="kiit logo" /></li>
                                <li><img className="md:h-12 h-12 text-shadow1 box-shadow1 md:mt-1 mt-4 mr-[25px]" src={keslogo} alt="KES LOGO" /></li>
                            </ul>
                        </div>
                        <div className="hidden md:flex md:text-center">
                            <Link to="/" className="mx-[16px] cursor-pointer mt-4  text-shadow1   box-shadow2 px-2  text-green-500 start  ">HOME</Link>
                            <Link to="/Aboutus" className="mx-[20px] cursor-pointer px-2  text-shadow mt-4 box-shadow2  text-white hover:text-green-400 start transition duration-500">ABOUT US</Link>
                            <Link to="/studentblogs" className="mx-[20px] cursor-pointer px-2 mt-4 text-shadow box-shadow2 text-white hover:text-green-400 start transition duration-500  ">STUDENT BLOGS</Link>
                            <Link to="/projects" className="mx-[20px] cursor-pointer text-shadow px-2 mt-4  box-shadow2 text-white hover:text-green-400 start transition duration-500">PROJECTS</Link>
                            <Link to="/achievement" className="mx-[16px] mt-4  cursor-pointer box-shadow3 px-2 text-white hovert:text-green-400 text-shadow start transition duration-500">ACHIEVEMENTS</Link>
                        </div>
                    </div>
                    <div className="md:hidden flex pt-2 pr-3">
                        <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
                            <svg className="w-7 h-7 text-gray-600 hover:text-blue-500 fill-current" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`md:hidden mobile-menu ${menuVisible ? '' : 'hidden'}`}>
                <ul className="">
                    <li className="active"><Link to="/" className="block text-sm px-2 py-4 bg-blue-500 hover:font-semibold   bg-white   transition duration-300 ">HOME</Link></li>
                    <li><Link to="/aboutus" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:font-semibold hover:text-slate-300  bg-white  transition duration-300">ABOUT US</Link></li>
                    <li><Link to="/studentblogs" className="block text-sm px-2 py-4  hover:bg-blue-500 hover:font-semibold hover:text-slate-300 bg-white  transition duration-300  ">STUDENT BLOGS</Link></li>
                    <li><Link to="/projects" className="block text-sm px-2 py-4 hover:bg-blue-500 hover:font-semibold hover:text-slate-300 bg-white  transition duration-300 ">PROJECTS</Link></li>
                    <li><Link to="/achieve.html" className="block text-sm px-2 py-4 bg-blue-500  font-bold">ACHIEVEMENTS</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavbarHome;
