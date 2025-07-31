import React from "react";
import { FaEye } from "react-icons/fa";
import gsap from "gsap";
import { useRef } from "react";

export default  function Vision() {
  const textRef = useRef(null);
  const logoRef = useRef(null);
  const onMouseEnter = ()=>{
    gsap.to(textRef.current,{
      opacity:1,
      duration:0.5,
      ease:"power2.out"
    })
    gsap.to(logoRef.current, {
      duration: 0.5,
      scale: 1.5,
      ease: "power2.out"
    });
  }
  const onMouseLeave = ()=>{
    gsap.to(textRef.current,{
      opacity:0,
      duration:0.5,
      ease:"power2.out"
    })  
    gsap.to(logoRef.current, {
      duration: 0.5,
      scale: 2,
      ease: "power2.out"
    });
  }
    return (
    <div className="bg-blue-500 w-full h-full transition-all duration-300">
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className=" bg-[#C8DBFA]  h-[90vh] flex flex-col items-center justify-center bg-opacity-80  p-6 md:p-8 transition-all duration-700 shadow-inner group-hover:shadow-xl">
        <div ref={logoRef} className="inline-flex z-10 items-center gap-2 px-4 scale-[2]   py-1 mb-5 text-sm font-semibold rounded-full shadow-sm bg-purple-100 text-purple-700">
          <FaEye className="text-purple-600" />
          Vision
        </div>  
        <div ref={textRef} className="opacity-0">
          <h3 className="text-xl z-10 md:text-2xl font-bold text-gray-900 mb-3">
            Creating Global Impact with Smart Education Systems
          </h3>
          <p className="text-gray-800 z-10 text-sm md:text-gray-800 leading-relaxed">
          We aim to empower institutions with the tools to turn data into actionable insight—
          leading to smarter education experiences globally.
        </p>
        </div>
      </div>
    </div>
  );
} 