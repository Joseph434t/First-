import React, { useState } from "react";
import Navbar from "../components/Navbar";
import img from "../assets/images/Property-House.png";
import avatar from "../assets/images/Avatar-Image.png";
import path from "../assets/icons/Path1.png";
import Footer from "../components/Footer";
import img1 from "../assets/images/Rectangle1.png";
import img2 from "../assets/images/Rectangle2.png";
import img3 from "../assets/images/Rectangle3.png";
import img4 from "../assets/images/Rectangle4.png";
import img5 from "../assets/images/Rectangle5.png";
import img6 from "../assets/images/Rectangle6.png";
import img7 from "../assets/images/Rectangle7.png";
import bed from "../assets/icons/bed2.png";
import shower from "../assets/icons/shower2.png";
import size from "../assets/icons/size2.png";
import garage from "../assets/icons/Garage.png";
import calender from "../assets/icons/Calender.png";
import circle from "../assets/icons/circle.png";
import line from "../assets/icons/Line.png";
import exp1 from "../assets/images/Exp1.png";
import exp2 from "../assets/images/Exp2.png";
import exp3 from "../assets/images/Exp3.png";
import exp4 from "../assets/images/Exp5.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className=" bg-gradient-to-tr from-black from-30% to-yellow-500 to-150% h-50">
      <Navbar />
      <hr className="border-gray-500" />
      <div className="flex justify-between md:px-50 pt-4">
        <div className="text-left">
          <h1 className=" text-white text-2xl md:text-3xl font-semibold">Modern House</h1>
          <p class="text-gray-500">3002 Foster Ave, Brooklyn, NY 11210, USA</p>
        </div>
        <div class="text-right">
          <p className="text-white font-bold text-2xl md:text-3xl">$450,000</p>
          <p className="text-gray-500">$2,800/sq ft</p>
        </div>
      </div>
      <div className="md:flex gap-10 md:-25 pt-20">
        <img src={img} alt="" className="pb-10"/>
        <div className="rounded-xl gap-3 p-5">
          <div className="bg-gray-100  rounded-xl p-5">
            <div className="flex items-center gap-2">
              <img src={avatar} alt="" className="h-12" />
              <div>
                <p>Kayley Hall</p>
                <Link to="" className=" text-yellow-500">View Profile</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-5 mb-3">
            <input type="text" placeholder="Name" className=" h-10" />
            <input type="text" placeholder="Phone" className=" h-10" />
            <input type="text" placeholder="Email" className=" h-10" />
            <textarea
              type="text"
              placeholder="Hello, I'm interested in..."
              className=" h-25 w-70"
            />
          </div>
          <div>
            <button className="bg-black w-70 h-20 rounded-tr-xl text-white font-semibold flex justify-center items-center gap-4">
              Learn more
              <img src={path} alt="" className="h-3 w-8" />
            </button>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-3 gap-2 md:flex md:px-25 pt-5 md:gap-6">
        <img src={img1} alt="" className="h-20 w-20" />
        <img src={img2} alt="" className="h-20 w-20" />
        <img src={img3} alt="" className="h-20 w-20" />
        <img src={img4} alt="" className="h-20 w-20" />
        <img src={img5} alt="" className="h-20 w-20" />
        <img src={img6} alt="" className="h-20 w-20" />
        <img src={img7} alt="" className="h-20 w-20" />
      </div>
      <div class="md:px-25 pt-15 ">
        <h2 className="text-4xl font-semibold pb-10">Details</h2>
        <div className="flex items-center">
          <button class="flex justify-center items-center gap-2 border-1 w-55 h-20">
            <img src={bed} alt="" />4
          </button>
          <button class="flex justify-center items-center gap-2 border-1 w-55 h-20">
            <img src={shower} alt="" />2
          </button>
          <button class="flex justify-center items-center gap-2 border-1 w-55 h-20">
            <img src={size} alt="" />2
          </button>
          <button class="flex justify-center items-center gap-2 border-1 w-55 h-20">
            <img src={garage} alt="" />1
          </button>
          <button class="flex justify-center items-center gap-2 border-1 w-55 h-20">
            <img src={calender} alt="" />
            2007
          </button>
        </div>
      </div>
      <div className="pt-15 md:px-25 pb-10">
        <h2 className="font-semibold text-4xl pb-8">Description</h2>
        <div className="max-w-200">
          <hr class="px-25 pt-10" />
          <p>
            At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut
            ipsi auctori huius disciplinae placet: constituam, quid sit
            numeranda nec me ab illo inventore veritatis et expedita distinctio
            nam libero tempore, cum memoriter, tum etiam ac ratione.
          </p>
          <p className="pt-10">
            Si sine metu degendae praesidia firmissima filium morte multavit si
            sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob
            rem voluptas assumenda est, quid sit extremum et inter mediocrem
            animadversionem atque natum sit, a natura incorrupte.
          </p>
          <p className="pt-10">
            Omne animal, simul atque in sanguinem suum tam inportuno tamque
            crudeli; sin, ut earum motus et accusamus et argumentandum et dolore
            suo sanciret militaris imperii disciplinam exercitumque in liberos
            atque haec ratio late patet in quo pertineant non possim.
          </p>
        </div>
      </div>
      <div className="md:px-25 pb-15">
        <h2 className="font-semibold text-4xl pb-8">Features</h2>
        <hr className="max-w-200" />
        <div className="flex items-center md:gap-45">
          <ul className="text-gray-500 pt-10">
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
          </ul>
          <ul className="text-gray-500 pt-10">
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
          </ul>
          <ul className="text-gray-500 pt-10">
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
            <li className="flex items-center gap-2 pb-5">
              {" "}
              <img src={circle} alt="" />
              Air Conditioning
            </li>
          </ul>
        </div>
      </div>
      <div class="md:px-25">
        <img src={line} alt="" />
        <h2 className="font-semibold text-4xl pb-20">Similar Listings</h2>
      </div>
      <Carousel />
      <Footer />
    </div>
  );
}

function Carousel() {
  const images = [exp1, exp2, exp3, exp4, exp1];
  const [current, setCurrent] = useState(0);
  const imagesPerPage = 2;
  const totalSlides = Math.ceil(images.length / imagesPerPage);

  // Auto-move carousel every 3 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="relative w-full md:px-25 mx-auto overflow-hidden">
      <div
        className="flex gap-5 transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * (70 / imagesPerPage)}%)`,
          width: `${(images.length / imagesPerPage) * 100}%`,
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
