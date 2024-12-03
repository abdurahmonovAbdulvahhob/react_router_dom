import React from 'react'
import { useNavigate } from 'react-router-dom';

import foto from "../../public/notfound.jpg"

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div className="w-[80%] mx-auto mt-3">
      <div>
        <img src={foto} alt="" />
      </div>

      <div className="text-center pt-5">
        <button
          onClick={() => navigate("/")}
          className="border-2 border-blue-300 rounded-lg py-2 bg-slate-300 w-[20%]"
        >
          Go home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="border-2 border-blue-300 rounded-lg py-2 bg-slate-300 w-[20%]"
        >
          Go back
        </button>
      </div>
    </div>
  );
}

export default NotFound