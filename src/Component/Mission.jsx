import React, { useRef } from "react";
import { FaEye } from "react-icons/fa";
import gsap from "gsap";

export default function Mission() {
const textRef = useRef(null);
const logoRef = useRef(null);
const onMouseEnter = ()=>{
  console.log("Mouse Enter - Animating to opacity 1");
  gsap.to(textRef.current, {
    opacity: 1,
    duration: 0.5,
    ease: "power2.out"
  });
  gsap.to(logoRef.current, {
    duration: 0.5,
    scale: 1.5,
    ease: "power2.out"
  });
};

const onMouseLeave = ()=>{
  console.log("Mouse Leave - Animating to opacity 0");
  gsap.to(textRef.current, {
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  });
  gsap.to(logoRef.current, {
    duration: 0.5,
    scale: 2,
    ease: "power2.out"
  });
};


  return (
    <div className="bg-blue-500 w-full h-full transition-all duration-300">
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="bg-[#C8DBFA] h-[90vh] flex flex-col items-center justify-center bg-opacity-80 p-6 md:p-8 shadow-inner group-hover:shadow-xl">
        <div ref={logoRef} className="inline-flex  z-10 items-center gap-2 px-4 scale-[2] py-1 mb-5 text-sm font-semibold rounded-full shadow-sm bg-purple-100 text-purple-700">
          <FaEye className="text-purple-900" />
          Mission
        </div>
        <div ref={textRef} className="opacity-0">
          <h3 className="text-xl z-10 md:text-2xl font-bold text-gray-900 mb-3">
            To be a leading provider of innovative education solutions
          </h3>
          <p className="text-gray-800 z-10 text-sm md:text-gray-800 leading-relaxed">
            Our goal is to provide cutting-edge technology and services that empower educators and learners to achieve their full potential.
          </p>
        </div>
      </div>
    </div>
  );
} 