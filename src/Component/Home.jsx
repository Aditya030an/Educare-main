



import React from "react";
import bgShape from "./photos/bg55.png";
import dashboardImg from "./photos/banner.svg";
import Products from "./Products";
import About from "./About";
import { FaPaperPlane, FaEye } from "react-icons/fa";
import Testimonial from "./Testimonial";
import Hero from "./Herosection";
import Footer from "./Footer";
import Boost from "./Boost";
import Cards from "./Cards";
import Lower from "./Lower";

export default function OverlapPages() {
  return (
    <div className="">
      {/* Section 1 */}
      <div className="flex flex-col">
        <div className="w-full min-h-screen bg-gray-50">
          <Hero />
        </div>
        <div className="w-full min-h-screen ">
          <Cards/>
        </div>
      </div>

      {/* Section 2 - About Section with Floating Blobs */}
      <div className="relative w-full min-h-screen bg-white font-sans overflow-hidden">
  {/* Blurred decorative shapes */}
  <div className="absolute w-[40rem] h-[40rem] bg-neutral-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-[-12rem] left-[-18rem] z-0" />
  <div className="absolute w-[30rem] h-[30rem] bg-slate-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 bottom-[-12rem] right-[-10rem] z-0" />
  <div className="absolute w-[25rem] h-[25rem] bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10 top-[45%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0" />

  {/* Section Content */}
  <section className="relative z-10 py-28 px-6 md:px-24 text-center">
    <div className="mb-14">
      <span className="inline-block text-xs uppercase tracking-wider text-gray-600 bg-gray-100 px-4 py-1 rounded-full font-medium shadow-sm">
        About Us
      </span>
      <h2 className="text-4xl md:text-6xl font-semibold mt-6 leading-tight text-gray-900 tracking-tight">
        Unleash The <span className="text-gray-700">Power</span> Of Data With{" "}
        <span className="text-gray-900">Educare</span>
      </h2>
      <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        Discover how Educare is revolutionizing education management through advanced analytics,
        AI-driven decision making, and seamless data orchestration.
      </p>
    </div>

    {/* Optional Mission/Vision Section */}
    {/* <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {[
        {
          icon: <FaPaperPlane className="text-neutral-600" />,
          title: "Mission",
          badgeColor: "bg-neutral-100 text-gray-700",
          heading: "Envisioning a Future Where Data Drives Success",
        },
        {
          icon: <FaEye className="text-neutral-600" />,
          title: "Vision",
          badgeColor: "bg-neutral-100 text-gray-700",
          heading: "Creating Global Impact with Smart Education Systems",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="group bg-white border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-500"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-1 mb-4 text-sm font-medium rounded-full ${item.badgeColor}`}
          >
            {item.icon}
            {item.title}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.heading}</h3>
          <p className="text-gray-500 text-base leading-relaxed">
            We aim to empower institutions with the tools to turn data into actionable insight—leading to smarter education experiences globally.
          </p>
        </div>
      ))}
    </div> */}

    {/* Lower component */}
    <Lower />
  </section>
</div>



      {/* Standard Scroll Sections (No overlap or pinning) */}
      <div className="w-full min-h-screen bg-white">
        <About />
      </div>
      <div className="w-full min-h-screen bg-white">
        <Testimonial />
      </div>
      <div className="w-full min-h-screen bg-white">
        <Boost />
      </div>
      <div className="w-full min-h-screen bg-white">
        <Footer />
      </div>
      
    </div>
  );
}