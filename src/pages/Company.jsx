import React from 'react'

import foto1 from "../assets/f1.png";
import foto2 from "../assets/f2.png";
import foto3 from "../assets/f3.png";

const Company = () => {
  return (
    <div id="company" className="w-[80%] mx-auto flex flex-col mt-3">
      <div className='flex flex-col gap-5'>
        <p className="text-xs">COMPANY</p>
        <h2 className="text-[40px] text-[#232536] w-[40%]">
          Award-winning Company seen and used by millions around the world.
        </h2>
        <p className="text-[16px] text-[#232536] w-[45%]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The Maker is a
          decentralized.{" "}
        </p>
      </div>

      <div className='flex gap-3 mt-7'>
        <img src={foto1} alt="" className='w-[30%] '/>
        <img src={foto2} alt="" className='w-[30%] '/>
        <img src={foto3} alt="" className='w-[30%] '/>
      </div>
    </div>
  );
}

export default Company;