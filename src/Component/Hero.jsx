// HeroAnimated.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dashboardImg from "./photos/banner.svg";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimated() {
  const shapeRef = useRef();

  useEffect(() => {
    gsap.to(shapeRef.current, {
      y: -50,
      scale: 1.2,
      opacity: 0.2,
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top center",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="hero-section relative w-full h-screen flex items-center justify-center bg-gradient-to-tr from-blue-50 to-white overflow-hidden">
      {/* Parallax Shape */}
      <div
        ref={shapeRef}
        className="absolute w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 left-[-80px] top-[-80px] z-0"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 text-center px-4 md:px-20"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-4">
          Smarter School ERP <br />
          Without the Complexity
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Experience intelligent school management solutions, visually stunning and simple to use.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition">
            🚀 Get Started
          </button>
          <button className="border border-gray-900 px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition">
            💰 View Pricing
          </button>
        </div>
      </motion.div>

      {/* Hero Image */}
      <motion.img
        src={dashboardImg}
        alt="ERP Dashboard"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-10 right-6 md:right-20 max-w-md md:max-w-lg shadow-2xl rounded-xl z-10"
      />
    </section>
  );
}