import React from "react";
import laptop from "../assets/laptop.jpg";
const Analytics = () => {
  return (
    <div className="w-full bg-white px-4 py-16">
      <div className="w-[90%] sm:max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[450px] sm:w-[520px] md:[500px] mx-auto"
          src={laptop}
          alt="laptop"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold text-">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold py-2">
            Manage Date Analytics Centrally
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
            nostrum harum praesentium officia dignissimos fuga dicta possimus,
            in ratione. Fugiat reiciendis a perferendis repellendus nostrum
            suscipit consequatur, quasi cupiditate obcaecati.
          </p>
          <button className="bg-black text-[#00df9a] text-lg w-[200px] rounded-lg font-semibold mx-auto md:mx-0 my-6 py-3">
            Dive In!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
