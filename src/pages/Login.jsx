import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
  return (
    <div className="w-96 p-3 border-2 border-blue-300 rounded-lg mx-auto mt-7 flex flex-col gap-4">
      <form className="flex flex-col gap-3 text-center">
        <h2>Login</h2>
        <input
          className="w-[80] border-blue-300 rounded-lg border-2 p-2"
          type="text"
          placeholder="Enter your name..."
        />
        <input
          className="w-[80] border-blue-300 rounded-lg border-2 p-2"
          type="text"
          placeholder="Enter your login..."
        />
        <input
          className="w-[80] border-blue-300 rounded-lg border-2 p-2"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="border-2 border-blue-300 rounded-lg py-2 bg-slate-300">
          Submit
        </button>
      </form>
      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => navigate("/")}
          className="border-2 border-blue-300 rounded-lg py-2 bg-slate-300"
        >
          Go home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="border-2 border-blue-300 rounded-lg py-2 bg-slate-300"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default Login;
