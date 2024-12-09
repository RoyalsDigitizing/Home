import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import { myImage } from "../../assets/index";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Graphic Design Specialists.",
      "High-Quality Embroidery Services.",
      "Custom Digitizing Experts.",
    ],
    
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/1 flex flex-col gap-20">
      <div className="flex flex-col gap-5 space-y-8">
        <div className="flex flex-row gap-5 justify-between">
          <div className="space-y-4">
            <h4 className="text-xs sm:text-sm md:text-base lg:text-lg font-normal">
              WELCOME TO DESIGNING WORLD
            </h4>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
              Hi, We are{" "}
              <span className="text-designColor capitalize">
                Royals Digitizing
              </span>
            </h1>
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white">
              a <span>{text}</span>
              <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#02f7de"
              />
            </h2>
          </div>

          <div className="w-24 h-24 md:w-36 md:h-36 rounded-full border-2 border-white overflow-hidden flex items-center justify-center">
            <img
              src={myImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bodyFont leading-5 sm:leading-6 md:leading-7 lg:leading-8 tracking-wide text-justify">
        We are Custom Digitizing and Graphics Design Experts, specializing in high-quality embroidery digitizing and creative graphic design services tailored to meet the needs of businesses and individuals. With a focus on precision, creativity, and excellence, we deliver top-notch logo embroidery digitizing, apparel branding, promotional designs, and stunning graphics that bring ideas to life. Our team is passionate about delivering exceptional results and continuously refining our skills to provide the best solutions for our clients
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;