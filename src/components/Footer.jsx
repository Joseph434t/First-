import React from "react";
import path from "../assets/icons/Path.png";
import logo from "../assets/icons/Group.png";
import IG from "../assets/icons/IGlogo.png";
import FB from "../assets/icons/FBlogo.png";
import TW from "../assets/icons/Tweetlogo.png";

export default function () {
  return (
    <div className="bg-gradient-to-tr from-black from-30% to-yellow-500 to-200% h-130">
      <div className="flex items-center justify-between mx-10 mt-8 p-15">
        <div className="">
          <h2 className="text-white font-semibold text-4xl">
            Make your dreams a <span className="text-yellow-500">reality</span>
          </h2>
        </div>

        <button
          href=""
          className="bg-yellow-500 p-3 rounded-tr-xl flex items-center gap-2"
        >
          Work with us <img src={path} alt="" />
        </button>
      </div>
      <hr className="border-gray-500 mx-25" />
      <div className=" flex justify-between px-25 pt-15">
        <div>
          <a href=""><img src={logo} alt="" className="mb-7" /></a>
          <div className="flex gap-10">
            <a href="">
              <img src={FB} alt="" />
            </a>
            <a href="">
              <img src={TW} alt="" />
            </a>
            <a href="">
              <img src={IG} alt="" />
            </a>
        </div>
          </div>
        <div className="flex gap-40">
          <ul>
            <li className="text-white font-semibold">Coloumn Heading</li>
            <li className="text-gray-500">Link goes here</li>
            <li className="text-gray-500">Link goes here</li>
            <li className="text-gray-500">Link goes here</li>
            <li className="text-gray-500">Link goes here</li>
          </ul>
          <ul>
            <li className="text-white font-semibold">Coloumn Heading</li>
            <li className="text-gray-500">Link goes here</li>
            <li className="text-gray-500">Link goes here</li>
            <li className="text-gray-500">Link goes here</li>
            <li className="text-gray-500">Link goes here</li>
          </ul>
          <ul>
            <li className="text-white font-semibold">Coloumn Heading</li>
            <li className="text-gray-500">Link goes here</li>
            <li className="text-gray-500">Link goes here</li>
            <li className="text-gray-500">Link goes here</li>
            <li className="text-gray-500">Link goes here</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
