import React from "react";

function Signup() {
  return (
    <div className="w-[300px] h-[400px] flex flex-col justify-between items-center bg-green-600 rounded-lg border-2 border-white text-white">
      <form className="h-44 w-full p-8 space-y-3">
        <input type="text" placeholder="Username" className="inputClass" />
        <input type="text" placeholder="Email" className="inputClass" />
        <input type="text" placeholder="Password" className="inputClass" />
      </form>
      <button className="h-12 w-48 bg-white text-green-600 rounded-full">
        Sign up
      </button>
      <h3 className="pb-8">Already have an account? Log in.</h3>
    </div>
  );
}

export default Signup;
