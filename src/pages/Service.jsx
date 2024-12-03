import React from 'react'

const Service = () => {
  return (
    <div id="service" className="mt-3">
      <div className="flex w-[80%] mx-auto bg-[#FFE6D2] py-10">
        <div className="flex flex-col gap-5 w-[50%] items-start justify-center ml-[10%]">
          <p className="text-[14px]">Our Services</p>
          <h2 className="text-[42px]">
            We Build Software Solutionthat Solve Clients Business Challenges
          </h2>
          <p className="text-[14px]">
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
          <button className="bg-[#444CFC] text-white w-[180px] h-[54px]">
            Request Quote
          </button>
        </div>

        <div className="w-[50%] flex justify-center items-center">
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