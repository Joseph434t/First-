import React, { useState } from "react";
import logo from "../assets/icons/logo.png";
import path from "../assets/icons/Path.png";
import shape from "../assets/icons/Shape.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <nav class="flex sm:flex justify-between p-7 px:10 md:px-50 items-center">
        <div class="flex gap-2 items-center">
          <Link to="/" className="flex gap-2 items-center">
            <img src={shape} alt="" class="h-10" />
            <img src={logo} alt="" className="h-5" />
          </Link>
        </div>
        <ul class="hidden md:flex gap-10 text-white items-center">
          <Link to="/about">About</Link>
          <Link to="/services">
            Nav Link
          </Link>
          <Link to="/projects">
            Nav Link
          </Link>
          <Link to="/blog">
            Nav Links
          </Link>
          <Link to="" class="px-4 py-3 bg-yellow-500 text-black rounded-tr-2xl flex items-center">
              Work with us <img src={path} alt="" className="h-fit ml-2" />
          </Link>
        </ul>
        <div className="block md:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-10 h-1 bg-white mb-1"></div>
          <div className="w-10 h-1 bg-white mb-1"></div>
          <div className="w-10 h-1 bg-white"></div>
        </div>
      </nav>
      {isOpen && <MobileNav close={closeMenu} />}
    </div>
  );
}

const MobileNav = ({ close }) => {
  return (
    <div className="bg-black/60 w-full h-screen flex flex-col justify-center items-center md:hidden absolute top-0 left-0 z-10 backdrop-blur-sm">
      <div className=" bg-gray-500 h-4 w-4 absolute right-5 top-5 flex justify-center items-center rounded-full p-3">
        <button className="text-white " onClick={close}>
          X
        </button>
      </div>
      <ul class=" flex flex-col gap-10 text-white items-center">
        <Link to="/about">About</Link>
        <Link to="/services">
          <a href="">Nav Link</a>
        </Link>
        <Link to="/projects">
          <a href="">Nav Link</a>
        </Link>
        <Link to="/blog">
          <a href="">Nav Link</a>
        </Link>
        <Link to="" class="px-4 py-3 bg-yellow-500 text-black rounded-tr-2xl">
          <a href="" className="flex items-center ">
            Work with us <img src={path} alt="" className="h-fit ml-2" />
          </a>
        </Link>
      </ul>
    </div>
  );
};
