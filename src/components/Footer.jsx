import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto py-16 px-6 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            necessitatibus alias maxime! Debitis earum asperiores officiis!
          </p>
          <div className="flex  my-6 justify-start gap-9 sm:gap-9">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h1 className="font-medium sm:text-lg text-gray-400">Solutions</h1>
            <ul>
              <li className="py-1 pl-2 text-sm">JavaScript</li>
              <li className="py-1 pl-2 text-sm">Python</li>
              <li className="py-1 pl-2 text-sm">Java</li>
              <li className="py-1 pl-2 text-sm">Ruby on rails</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium sm:text-lg text-gray-400">Support</h1>
            <ul>
              <li className="py-1 pl-2 text-sm">sdadsadasd</li>
              <li className="py-1 pl-2 text-sm">asdsadasdasd</li>
              <li className="py-1 pl-2 text-sm">asdasdad</li>
              <li className="py-1 pl-2 text-sm">Iasdasds</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium sm:text-lg text-gray-400">
              Documentation
            </h1>
            <ul>
              <li className="py-1 pl-2 text-sm">Aadsad</li>
              <li className="py-1 pl-2 text-sm">adsdeting</li>
              <li className="py-1 pl-2 text-sm">asdasde</li>
              <li className="py-1 pl-2 text-sm">Iasdasds</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium sm:text-lg text-gray-400">Guides</h1>
            <ul>
              <li className="py-1 pl-2 text-sm">sdass</li>
              <li className="py-1 pl-2 text-sm">Maasdeting</li>
              <li className="py-1 pl-2 text-sm">Comasdce</li>
              <li className="py-1 pl-2 text-sm">Insiasd</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
