import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuOn, setMenuOn] = useState(false);
  const handleNavIconChange = () => {
    setMenuOn(!menuOn);
  };
  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <a href="">
          <li className="p-4">Home</li>
        </a>
        <a href="">
          <li className="p-4">Company</li>
        </a>
        <a href="">
          <li className="p-4">Resources</li>
        </a>
        <a href="">
          <li className="p-4">About</li>
        </a>
        <a href="">
          <li className="p-4">Contact</li>
        </a>
      </ul>
      <div onClick={handleNavIconChange} className="block md:hidden">
        {menuOn ? (
          <AiOutlineClose size={27} color="#00df9a" />
        ) : (
          <AiOutlineMenu size={27} color="#00df9a" />
        )}
      </div>
      <div
        className={
          menuOn
            ? "fixed left-0 top-0 min-w-[30%] h-full border-r md:hidden  border-r-gray-900 bg-[#000300] p-4 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="pt-12 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
