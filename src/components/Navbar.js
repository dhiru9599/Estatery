import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between w-[95vw] mx-auto h-[10vh] items-center">
      <div className="w-2/5">
        <ul className="flex justify-around items-center">
          <li>
            <h2 className="font-bold text-violet-500 text-2xl">🏠 Estatery</h2>
          </li>
          <li>
            <a href="" className="bg-violet-200 px-4 py-2 rounded-md">Buy</a>
          </li>
          <li>
            <a href="">Sell</a>
          </li>
          <li>
            <a href="">Manage Property</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-around w-[15vw]">
        <button className="w-[6vw] border-2 border-gray-300 h-[40px] rounded-md bg-white">Login</button>
        <button className="w-[6vw] bg-violet-500 h-[40px] rounded-md text-white font-bold">Signup</button>
      </div>
    </div>
  );
};

export default Navbar;
