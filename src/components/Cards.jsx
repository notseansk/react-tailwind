import React from "react";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[7rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-[4rem] md:gap-0 lg:gap-12">
        <div className=" w-[80%] md:w-[92%] mx-auto shadow-[0px_20px_15px_1px_rgba(0,0,0,0.1)] flex flex-col items-center py-4 mb-9 md:my-4 hover:scale-105 duration-300 rounded-lg">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={single}
            alt="card1"
          />
          <h2 className="text-center py-6 font-bold text-2xl">Single User</h2>
          <p className="font-bold text-4xl">$149</p>
          <div className="font-medium w-[70%] text-center m-2">
            <p className="py-2 border-b border-gray-300 ">500GB Storage</p>
            <p className="py-2 border-b  border-gray-300 ">1 Granted User</p>
            <p className="py-2 border-b  border-gray-300">Send Up to 2GB</p>
          </div>
          {/* tried max-w-[200px] on buttons but didn't work. I think it's because
          of it being flex item. Opted to use min() method to change between
          200px and 70% of the total width according to which one is smaller in
          the context senario. */}
          <button className="bg-[#00df9a] w-[min(200px,70%)] rounded-lg my-4 py-2 font-bold text-xl">
            Start Trial
          </button>
        </div>
        <div className=" w-[88%] md:w-[97%] mx-auto shadow-[0px_25px_29px_3px_rgba(0,223,154,0.2)] flex flex-col items-center py-4 mb-9 md:my-0 hover:scale-105 duration-300 rounded-lg">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={double}
            alt="card1"
          />
          <h2 className="text-center py-6 font-bold text-2xl">Double User</h2>
          <p className="font-bold text-4xl">$249</p>
          <div className="font-medium w-[70%] text-center m-2">
            <p className="py-2 border-b border-gray-300 ">2TB Storage</p>
            <p className="py-2 border-b  border-gray-300 ">2 Granted Users</p>
            <p className="py-2 border-b  border-gray-300">Send Up to 50GB</p>
          </div>
          <button className="bg-[#00df9a] w-[min(200px,70%)] rounded-lg my-4 py-2 font-bold text-xl">
            Start Trial
          </button>
        </div>
        <div className="w-[80%] md:w-[92%] mx-auto shadow-[0px_20px_15px_1px_rgba(0,0,0,0.1)] flex flex-col items-center py-4 mb-9 md:my-4 hover:scale-105 duration-300 rounded-lg">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={triple}
            alt="card1"
          />
          <h2 className="text-center py-6 font-bold text-2xl">Triple User</h2>
          <p className="font-bold text-4xl">$349</p>
          <div className="font-medium w-[70%] text-center m-2">
            <p className="py-2 border-b border-gray-300 ">3TB Storage</p>
            <p className="py-2 border-b  border-gray-300 ">3 Granted User</p>
            <p className="py-2 border-b  border-gray-300">Send Up to 50GB</p>
          </div>
          <button className="bg-[#00df9a] w-[min(200px,70%)] rounded-lg my-4 py-2 font-bold text-xl">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
