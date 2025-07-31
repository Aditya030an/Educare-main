// import React from "react";
// import { FaPlay } from "react-icons/fa";
// import growthIcon from "./photos/graph.svg"; // Replace with actual path
// import plantImg from "./photos/plant.png";    // Replace with actual path

// export default function BoostSection() {
//   return (
//     <section className="relative w-full bg-white py-20 px-6 md:px-20 overflow-hidden font-sans">
//       {/* Background shapes */}
//       <div className="absolute -left-40 top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] bg-blue-50 rounded-3xl opacity-30 z-0" />
//       <div className="absolute -right-40 top-1/2 transform -translate-y-1/2 w-[300px] h-[300px] bg-blue-50 rounded-3xl opacity-30 z-0" />

//       <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
//         {/* Left Icon Box */}
//         <div className="flex flex-col items-start gap-4">
//           <div className="bg-white rounded-xl p-4 shadow-md flex items-center gap-2">
//             <img src={growthIcon} alt="Growth" className="w-8 h-8" />
//             <span className="text-green-600 font-semibold text-sm">+25%</span>
//           </div>

//           <div className="bg-white rounded-xl p-3 shadow-md text-xs text-gray-700">
//             <div className="flex items-center gap-2">
//               <div className="w-2 h-2 bg-green-400 rounded-full" />
//               <span>+21%</span>
//             </div>
//             <p className="mt-1 text-gray-500 text-[11px]">Progress in sales this month</p>
//           </div>
//         </div>

//         {/* Center Content */}
//         <div className="text-center lg:text-left max-w-2xl">
//           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
//             Let Educare boost your business!
//           </h2>
//           <p className="text-gray-500 mb-6">
//             Join millions of schools that are already using Educare’s Educational ERP system and start growing your reach, revenue and sales.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//             <button className="flex items-center gap-2 px-5 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition">
//               <FaPlay />
//               <span>Watch video</span>
//             </button>
//             <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
//               Contact for Demo
//             </button>
//           </div>
//         </div>

//         {/* Right Image */}
//         <div className="flex justify-center">
//           <img
//             src={plantImg}
//             alt="Plant"
//             className="w-[150px] h-[150px] object-contain"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPlay } from "react-icons/fa";
import growthIcon from "./photos/graph.svg";
import plantImg from "./photos/plant.png";

gsap.registerPlugin(ScrollTrigger);

export default function BoostSection() {
  const sectionRef = useRef();
  const cardRef = useRef();
  const textRef = useRef();
  const imgRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: -60,
        duration: 1.2,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(imgRef.current, {
        opacity: 0,
        y: 80,
        duration: 1.4,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-[#f7f9ff] via-[#f4f9ff] to-white py-24 px-6 md:px-20 overflow-hidden font-sans"
    >
      {/* Blurred floating blobs */}
      <div className="absolute top-0 left-[-100px] w-[300px] h-[300px] bg-blue-200 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-[-100px] right-[-80px] w-[350px] h-[350px] bg-green-200 opacity-30 rounded-full blur-3xl animate-pulse z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left Icon Cards */}
        <div ref={cardRef} className="flex flex-col items-start gap-5">
          <div className="bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl p-4 flex items-center gap-3 transition-all hover:scale-105 duration-300">
            <img src={growthIcon} alt="Growth" className="w-8 h-8" />
            <span className="text-green-600 font-semibold text-sm">+25%</span>
          </div>

          <div className="bg-white/30 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl p-4 text-xs text-gray-800 w-56">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
              <span className="text-sm font-medium">+21% this month</span>
            </div>
            <p className="text-gray-600 text-[11px]">
              Progress in sales driven by Educare system
            </p>
          </div>
        </div>

        {/* Center Content */}
        <div ref={textRef} className="text-center lg:text-left max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Let <span className="text-blue-600">Educare</span> boost your business
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Join millions of schools already using our Educational ERP system to
            grow your reach, revenue, and sales.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <button className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-xl shadow-md hover:scale-105 transition-all duration-300">
              <FaPlay />
              <span>Watch Video</span>
            </button>
            <button className="relative group px-6 py-3 bg-blue-600 text-white font-medium rounded-xl overflow-hidden shadow-xl hover:bg-blue-700 transition-all duration-300 hover:scale-105">
              <span className="z-10 relative">Contact for Demo</span>
              <div className="absolute inset-0 bg-blue-700 scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom rounded-xl blur-2xl opacity-30"></div>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          ref={imgRef}
          className="relative group w-[180px] h-[180px] transition-transform duration-500 hover:rotate-2 hover:scale-105"
        >
          <img
            src={plantImg}
            alt="Plant"
            className="w-full h-full object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
