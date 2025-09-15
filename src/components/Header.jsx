import React from "react";
import Header from "../assets/images/Header.jpg";
import Path1 from "../assets/icons/Path1.png";
import Navbar from "./Navbar";

export default function () {
  return (
    <div>
      <div
        class="relative bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${Header})` }}
      >
        <div class="absolute inset-0 bg-black opacity-50"></div>

        <div class="absolute inset-0">
          <Navbar />
          <div>
            <h1 class="font-bold text-4xl px-20 max-w-100 md:px-40 lg:px-40 mt-7 md:max-w-7/12 text-white md:text-7xl md:font-semibold">
              Beautiful homes made for you
            </h1>

            <p class="px-20 max-w-130 md:max-w-180 md:px-40 max-w-10/20 mt-10 text-white">
              In oculis quidem se esse admonere interesse enim maxime placeat,
              facere possimus, omnis. Et quidem faciunt, ut labore et accurate
              disserendum et harum quidem exercitus quid.
            </p>

            <p class="mx-20 mt-30 bg-white md:mx-60 p-5 font-semibold">
              <a href="" className="flex items-center gap-2">
                See all listings <img src={Path1} alt="" className="h-fit" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
