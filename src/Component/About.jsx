import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import justin from "./photos/img 1.png";
import devin from "./photos/img 2.png";
import frank from "./photos/img 3.png";
import lucinda from "./photos/img 4.png";
import hester from "./photos/img 5.png";
import calvin from "./photos/img 6.png";
import lora from "./photos/img 7.png";
import brett from "./photos/img 8.png";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

// members Data
const TeamMembers = [
  {
    id: 1,
    title: "name",
    about: "about",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWxzfGVufDB8fDB8fHww",
    post: "post",
    Hobbies: ["React", "Node.js", "AI/ML"],
  },
  {
    id: 2,
    title: "Name",
    about: "about",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzfGVufDB8fDB8fHww",
    post: "post",
    Hobbies: ["React Native", "Firebase", "Blockchain"],
  },
  {
    id: 3,
    title: "name",
    about: "Post",
    image: "https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzfGVufDB8fDB8fHww",
    post: "Cloud Solutions",
    Hobbies: ["AWS", "Docker", "Kubernetes"],
  },
  {
    id: 4,
    title: "name",
    about: "post",
    image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    post: "Data Science",
    Hobbies: ["Python", "TensorFlow", "Tableau"],
  },
  {
    id: 5,
    title: "Name",
    about: "Post",
    image: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    post: "IoT Development",
    Hobbies: ["IoT", "MongoDB", "Node.js"],
  },
  {
    id: 6,
    title: "name",
    about: "post",
    image: "https://images.unsplash.com/photo-1617922001439-4a2e6562f328?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsc3xlbnwwfHwwfHx8MA%3D%3D",
    post: "Data Science",
    Hobbies: ["Python", "TensorFlow", "Tableau"],
  }
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const sliderRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;
    const totalScrollWidth = sliderRef.current.scrollWidth;
    const containerWidth = section.offsetWidth;

    gsap.to(sliderRef.current, {
      x: `-${totalScrollWidth - containerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScrollWidth - containerWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    gsap.to(".blob-float", {
      y: 30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    const cursor = cursorRef.current;
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans py-26 overflow-hidden"
    >
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 bg-blue-600 rounded-full pointer-events-none z-[1000] mix-blend-difference"
      ></div>

      {/* Blobs */}
      <div className="blob-float absolute w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-[-5rem] left-[-10rem] z-0" />
      <div className="blob-float absolute w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 bottom-[-5rem] right-[-5rem] z-0" />

      {/* Heading */}
      <div className="relative z-10 text-center mb-20 px-6">
        <span className="uppercase text-xs tracking-widest text-blue-600 bg-blue-100 px-4 py-1 rounded-full font-medium shadow-sm">
          Our Team
        </span>
        <h2 className="text-4xl md:text-6xl font-bold mt-5 leading-tight">
          Meet Our <span className="text-blue-500">Visionary</span> Team
        </h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-base">
          Explore the diverse professionals shaping the future of Educare with innovation and purpose.
        </p>
      </div>

      {/* Horizontal Scroll Projects */}
      <div ref={scrollContainerRef} className="bottom w-full   h-[70vh] md:h-auto overflow-hidden p-10">
        <div
          ref={sliderRef}
          className="flex  flex-row gap-10 items-center w-max"
        >
          {TeamMembers.map((members) => (
            <div
              key={members.id}
              className="imgContainer md:w-[20rem] w-[20rem] md:h-[20rem] h-[30rem] bg-red-200 shrink-0 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <div className="img w-full h-full bg-blue-200 relative">
                <img
                  src={members.image}
                  alt={members.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <div className="text-white">
                    <span className="text-sm font-medium text-red-400">{members.post}</span>
                    <h3 className="text-xl font-bold mb-2">{members.title}</h3>
                    <p className="text-sm text-gray-300 mb-3">{members.about}</p>
                    <div className="flex flex-wrap gap-2">
                      {members.Hobbies.map((Hobbies, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/20 rounded-full text-xs text-white backdrop-blur-sm"
                        >
                          {Hobbies}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className=" z-10 min-h-[100vh] md:min-h-[60vh] w-[100%]   mt-24 flex  gap-10  py-10 flex-col  items-center justify-start px-6 backdrop-blur-md">
        {/* <div className="w-1/2 text-left p-10 h-full flex flex-col rounded-2xl shadow-xl border border-blue-100">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">🚀 Join Our Mission</h3>
          <p className="text-gray-600 text-base mb-6">
            We’re building tools that empower education. If you’re passionate, skilled, and driven — we want to work with you.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-all">
            See Open Positions
          </button>
        </div> */}
        <div className="box w-full md:w-[70%] bg-white/20 h-auto backdrop-blur-xl h-full">
        <div className="head p-10 w-full">
          <h1 className="text-[2rem] md:text-[5rem]">Join Our <span className="font-semibold text-blue-600">Mission</span></h1>
        </div>
        <div className="para 2-full p-5">
          <p className="text-[2rem] md:text-[3rem]"> We’re building tools that empower education. If you’re passionate, skilled, and driven — we want to work with you.
          </p>
        </div>
        </div>
        <div className=" w-full  md:w-1/2 flex     md:items-center justify-start md:justify-center">
        <button className="relative group !font-bold !p-2 !rounded-md  ">
            <Link style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}} to={"/"} className=" overflow- relative    hover:-translate-y-1 hover:scale-105 transition-all duration-300 flex items-center gap-2  !text-lg bg-black !font-bold !px-4 !py-4  !rounded-md   !w-fit !h-fit">
              <h1 className="z-10 text-white !text-lg !font-normal group-hover:text-black transition-all duration-300">See Open Postions</h1>
              <div className="absolute rounded-md z-1 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 top-0 left-0 w-[100%] h-full bg-white     transition-all duration-300"></div> 
            <span className="group-hover:scale-125 z-100 text-[4rem] transition-all absolute    group-hover:right-[-70%] duration-300 right-[-60%]">🚀</span>
          </Link>
            </button>
        </div>
      </div>
    </section>
  );
}
