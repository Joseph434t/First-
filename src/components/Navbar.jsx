import React from "react";
import logo from "../assets/icons/logo.png";
import path from "../assets/icons/path.png";
import shape from "../assets/icons/Shape.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav class="flex justify-between p-7 px-50">
        <div class="flex gap-2 items-center">
          <Link to="/" className="flex gap-2 items-center">
            <img src={shape} alt="" class="h-10" />
            <img src={logo} alt="" className="h-5" />
          </Link>
        </div>
        <ul class="flex gap-10 text-white items-center">
          <Link to='/about'>
            About
          </Link>
          <li>
            <a href="">Nav Link</a>
          </li>
          <li>
            <a href="">Nav Link</a>
          </li>
          <li>
            <a href="">Nav Link</a>
          </li>
          <li class="px-4 py-3 bg-yellow-500 text-black rounded-tr-2xl">
            <a href="" className="flex items-center ">
              Work with us <img src={path} alt="" className="h-fit ml-2" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
