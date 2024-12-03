import React from 'react'

const Service = () => {
  return (
    <div id="service" className="mt-3">
      <div className="flex w-[80%] mx-auto bg-[#FFE6D2] py-10 max-md:py-5 max-md:w-[90%]">
        <div className="flex flex-col gap-5 w-[50%] items-start justify-center mx-[10%] max-md:mx-[5%] ">
          <p className="text-[14px]">Our Services</p>
          <h2 className="text-[42px] max-lg:text-3xl max-sm:w-[100%] max-sm:text-xl">
            We Build Software Solutionthat Solve Clients Business Challenges
          </h2>
          <p className="text-[14px] max-lg:text-sm max-sm:w-[90%] max-sm:text-[10px]">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
          <button className="bg-[#444CFC] text-white w-[180px] h-[54px] max-md:text-sm max-md:w-[140px] max-md:h-[44px]">
            Request Quote
          </button>
        </div>

        <div className="w-[50%] flex justify-center items-center max-md:text-sm">
          <ul>
            <li>Technical support</li>
            <li>Development</li>
            <li>AWS/Azure </li>
            <li>Consulting</li>
            <li>Information Technology</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;