import React from 'react'
import foto from "../assets/mainPhoto.png"
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <div id="home" className="mt-3">
      <div className="flex w-[80%] mx-auto bg-[#232536]">
        <div className="flex flex-col w-[50%] items-start justify-center ml-[10%]">
          <h2 className="text-[46px] text-white w-[80%]">
            Transform Your Idea Into Reality with Finsweet
          </h2>
          <p className="text-[14px] text-white w-[80%]">
            The entire Finsweet team knows what's good with Webflow and you can
            too with 1 week and a good attitude.
          </p>
          <button className="bg-[#444CFC] text-white w-[220px] h-[64px]">
            Request Quote
          </button>
        </div>

        <div className="w-[50%] flex justify-center items-center">
          <img src={foto} alt="" className="w-[80%] h-[80%]" />
        </div>
      </div>
    </div>
  );
}

export default Home