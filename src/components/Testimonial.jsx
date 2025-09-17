import React from "react";
import img from "../assets/images/Oval.png"

export default function Testimonail () {
  return (
    <div class="md:h-100">
      <div class="bg-linear-to-l from-black to-yellow-500 to-35% h-1 md:mx-135 m-10 rounded"></div>
      <p class="text-center max-w-100 md:max-w-350 px-20 md:px-130 font-semibold text-xl">
        “Certe, inquam, pertinax non existimant oportere exquisitis rationibus
        conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt,
        ut aut.”
      </p>
      <div className="flex justify-center md:gap-60 mt-10 md:mt-20 items-center">
        <div className="flex gap-5">
          <img src={img} alt="" className="h-12"/>
          <div>
            <p className="font-semibold">Lara Madrigal</p>
            <p className="">Client</p>
          </div>
        </div>
        <div className="flex gap-5 bg-black py-8 md:px-16">
          <img src={img} alt="" className="h-12"/>
          <div class="text-white">
            <p className="font-semibold">Lara Madrigal</p>
            <p className="">Client</p>
          </div>
        </div>
        <div className="flex gap-5">
          <img src={img} alt=""  className="h-12"/>
          <div>
            <p className="font-semibold">Lara Madrigal</p>
            <p className="">Client</p>
          </div>
        </div>
      </div>
    </div>
  );
}
