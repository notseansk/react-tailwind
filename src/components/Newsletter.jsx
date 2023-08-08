import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="w-[90%] lg:max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className=" lg:col-span-2 lg:mr-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2 mt-0 lg:mt-[8px]">
            Want tips and tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div>
          <div className="mt-10 sm:mt-0 flex flex-col gap-1 sm:gap-6 sm:flex-row sm:items-center justify-between md:justify-start lg:gap-0 w-full">
            <input
              className="p-2 w-full md:max-w-[300px] rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] shadow-[5px_23px_70px_0px_rgba(0,223,154,0.7)] text-black text-lg w-[200px] rounded-lg font-semibold py-2 sm:ml-4 my-6">
              Notify me!
            </button>
          </div>

          <p className="text-sm">
            Lorem, ipsum dolor sit amet elit Lorem ipsum dolor sit Lorem ipsum
            dolor sit amet{" "}
            <span className="text-[#00df9a]"> privacy policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
