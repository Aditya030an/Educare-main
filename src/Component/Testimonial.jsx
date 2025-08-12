
import React from "react";
import { FaPlay, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import userImg from "./photos/user.png"; // Replace with actual image or fallback below

export default function TestimonialSection() {
  return (
    <section className="min-h-screen bg-white py-16 px-3 md:px-20 font-sans">
      <div className="text-left w-full mb-12">
        <span className="text-xs font-semibold tracking-widest text-white  bg-black px-3 py-1 rounded-full">
          TESTIMONIALS
        </span>
        <h2 className="text-[3rem] md:text-[5rem] mt-4">
          What Our <span className="text-blue-500 font-medium">Customers</span> Say
        </h2>
        <p className="text-black mt-4 w-full text-[1.4rem] md:text-[3rem]">
          A brief introduction about Educare, highlighting its core functionality and impact in the realm of Education Enterprise Applications-
        </p>
      </div>

      <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} className="relative bg-white p-8 rounded-3xl flex flex-col lg:flex-row items-center gap-8 shadow-xl">
        {/* User Image */}
        <div className="relative min-w-[250px]">
          <img
            src={userImg || "https://via.placeholder.com/250"}
            alt="User"
            className="rounded-2xl w-[250px] h-[250px] object-cover shadow-lg"
          />
          <button className="absolute bottom-4 left-4 bg-white  p-3 rounded-full shadow-lg text-blue-500 text-lg hover:scale-110 transition">
            <FaPlay />
          </button>
        </div>

        {/* Testimonial Text */}
        <div className="flex-1 min-w-[300px] relative">
          <div className="relative text-lg text-black leading-relaxed mb-6">
            <span className="absolute text-6xl text-blue-300 opacity-30 -left-6 -top-8">
              “
            </span>
            ClickUp has become such an integral part of our work! By putting our
            work on ClickUp and organizing it into Sprints, we made it easy to
            work across departments without overloading ourselves with meetings
            and email threads.
          </div>
          <div className="font-semibold text-black">
            Jakub, Inbound Marketing Team Lead, STX Next
          </div>
        </div>

        {/* Arrows */}
        <div className="absolute bottom-6 right-6 flex gap-3">
          <button className="w-10 h-10 bg-white rounded-full shadow text-gray-600 flex items-center justify-center hover:scale-105 transition">
            <FaArrowLeft />
          </button>
          <button className="w-10 h-10 bg-white rounded-full shadow text-gray-600 flex items-center justify-center hover:scale-105 transition">
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

