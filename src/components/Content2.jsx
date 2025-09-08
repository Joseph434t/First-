import React from "react";
import line from "../assets/icons/Line.png";
import path2 from "../assets/icons/Path2.png"
export default function () {
  return (
    <div className="bg-linear-to-tr from-black from-15% to-yellow-500 to-180% h-120">
      <div class="text-white text-center p-20">
        <img src={line} alt="" class="px-130 pb-7" />
        <h1 class="font-bold text-5xl pb-5">You’re in good hands</h1>
        <p class="text-l px-100">
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </p>
        <a href="" className="">
          <p class="flex items-center gap-2 rounded-tr-xl bg-yellow-500 mx-130 p-3 mt-4 font-semibold text-black">Learn more <img src={path2} alt=""/></p>
        </a>
      </div>
    </div>
  );
}
