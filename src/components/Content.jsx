import React from "react";
import img1 from "../assets/images/content.png";
import Path1 from "../assets/icons/Path1.png"
import Line from "../assets/icons/Line.png"

export default function () {
  return (
    <div>
      <div className="flex mt-40">
        <div>
          <img src={img1} alt="" class="w-180" />
        </div>
        <div class="mt-25">
          <img src={Line} alt="" class="mb-7"/>
          <h1 class="text-6xl font-semibold">You’re in good hands</h1>
          <p class="max-w-90 pt-7 text-xl ">
            Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
            ne ferae quidem se repellere, idque instituit docere sic: omne
            animal, simul atque integre iudicante itaque aiunt hanc quasi
            involuta aperiri, altera occulta quaedam et voluptatem accusantium
            doloremque.
          </p>
        <p class="mt-8 bg-black max-w-40 text-white p-5 rounded-tr-xl "><a href="" class="flex items-center gap-3">Learn more<img src={Path1} alt="" class="h-fit" /></a></p>
        </div>
      </div>
    </div>
  );
}
