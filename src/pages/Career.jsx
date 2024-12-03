import React from 'react'

import career from "../assets/career.png"

const Career = () => {
  return (
    <div id="career" className="w-[80%] mx-auto flex flex-col mt-3">
      <div className="flex flex-col gap-4 items-center">
        <p className="text-[#232536] text-14px"> CAREER AT FINSWEET</p>
        <h2 className="text-[#232536] text-[48px] w-[50%] text-center">
          We hired people who are Always Passionate about what they do
        </h2>
        <p className="text-[#232536] text-16px w-[50%] text-center">
          Through True Rich Attended does no end it his mother since real had
          half every him case in packages enquire we up ecstatic unsatiable saw
          .
        </p>
      </div>

      <div>
        <img src={career} alt="" />
      </div>
    </div>
  );
}

export default Career