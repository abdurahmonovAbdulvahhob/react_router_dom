import React from 'react'
import foto from "../assets/mainPhoto.png"
import { IoIosArrowRoundForward } from "react-icons/io";

const Home = () => {
  return (
    <div id="home" className="mt-3">
      <div className="flex w-[80%] mx-auto bg-[#232536]">
        <div className="flex flex-col w-[50%] gap-2 items-start justify-center mx-[5%] py-[5%] max-md:mx-[2%] max-md:py-[2%]">
          <h2 className="text-[46px] text-white w-[80%] max-lg:text-3xl max-md:w-[100%]">
            Transform Your Idea Into Reality with Finsweet
          </h2>
          <p className="text-[14px] text-white w-[80%]">
            The entire Finsweet team knows what's good with Webflow and you can
            too with 1 week and a good attitude.
          </p>
          <button className="bg-[#444CFC] text-white w-[220px] h-[64px] max-md:w-[150px] max-md:h-[50px]">
            Request Quote
          </button>
        </div>

        <div className="w-[40%] flex justify-center items-center">
          <img src={foto} alt="" className="w-[80%] h-[80%] object-contain" />
        </div>
      </div>
    </div>
  );
}

export default Home