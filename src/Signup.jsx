import React from "react";

function Signup() {
  return (
    <div className="w-[300px] h-[400px] flex flex-col items-center bg-green-600 rounded-lg border-2 border-white text-white">
      <form className="h-44 w-full">
        <input type="text" placeholder="Username" className="inputClass" />
        <input type="text" placeholder="Email" className="inputClass" />
        <input type="text" placeholder="Password" className="inputClass" />
      </form>
      <button className="h-10 w-44 bg-white text-black">Sign up</button>
    </div>
  );
}

export default Signup;
