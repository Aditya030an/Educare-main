





import {
  FaChartBar,
  FaClipboardList,
  FaCheckSquare,
  FaBrain,
  FaSun,
} from "react-icons/fa";
import { MdInsertChart } from "react-icons/md";
import { HiOutlineDocumentReport } from "react-icons/hi";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cards from "./Cards";
import Lower from "./Lower";
gsap.registerPlugin(ScrollTrigger);

const tabs = [
  {
    id: "analytics",
    icon: <FaChartBar className="text-3xl text-blue-500 mx-auto mb-4" />, 
    title: "Rich Analytics",
  },
  {
    id: "report",
    icon: <HiOutlineDocumentReport className="text-3xl text-blue-500 mx-auto mb-4" />, 
    title: "Report",
  },
  {
    id: "exams",
    icon: <MdInsertChart className="text-3xl text-blue-500 mx-auto mb-4" />, 
    title: "Exams",
  },
  {
    id: "classroom",
    icon: <FaCheckSquare className="text-3xl text-blue-500 mx-auto mb-4" />, 
    title: "E Classroom",
  },
  {
    id: "activities",
    icon: <FaBrain className="text-3xl text-blue-500 mx-auto mb-4" />, 
    title: "Activities",
  },
  {
    id: "effective",
    icon: <FaSun className="text-3xl text-blue-500 mx-auto mb-4" />, 
    title: "Effective",
  },
];

const content = {
  analytics: {
    title: "Rich Analytics",
    desc: "Track and visualize performance trends with actionable insights.",
  },
  report: {
    title: "Report Generation",
    desc: "Generate comprehensive reports to monitor KPIs and business metrics.",
  },
  exams: {
    title: "Exam Management",
    desc: "Organize, schedule, and analyze exam results efficiently.",
  },
  classroom: {
    title: "E-Classroom Integration",
    desc: "Enable virtual learning with live sessions, materials, and feedback.",
  },
  activities: {
    title: "Activity Tracker",
    desc: "Keep a log of student activities and engagement in real time.",
  },
  effective: {
    title: "Effective Operations",
    desc: "Enhance operational efficiency through smart automations.",
  },
};

export default function FeaturedProducts() {
  const containerRef = useRef();
  const [activeTab, setActiveTab] = useState("analytics");

  useEffect(() => {
    const ctx = gsap.context(() => {
      tabs.forEach((tab) => {
        ScrollTrigger.create({
          trigger: `#section-${tab.id}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveTab(tab.id),
          onEnterBack: () => setActiveTab(tab.id),
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);


  return (
    <section
      ref={containerRef}
      className="w-screen min-h-screen bg-[#90a4ae] text-gray-900 "
    >
      {/* <div className="sticky top-0 z-50 bg-[#90a4ae] py-4">
        <div className="w-full px-4 md:px-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Featured</h2>
          <div className="flex gap-4 flex-wrap">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`px-4 py-2 rounded-xl text-sm font-mono flex items-center gap-2 cursor-pointer transition-all duration-300
                  ${activeTab === tab.id ? "bg-white shadow-md" : "bg-gray-400/30"}`}
              >
                <span className="w-4 h-4 rounded-full bg-black"></span>
                {tab.title.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div> */}
  {/* <Lower/> */}
      {/* {tabs.map((tab) => (
        <div
          id={`section-${tab.id}`}
          key={tab.id}
          className="min-h-[100vh]    w-full px-4 md:px-20 py-20 "
        >
          <div className="lower w-full flex  justify-between items-center">
          <div className="md:w-1/2 bg-blue-500 block mt-10 sticky top-[40vh]">
            <h3 className="text-2xl md:text-4xl font-bold mb-4">
              {content[tab.id].title}
            </h3>
            <p className="text-lg text-gray-800 max-w-md">
              {content[tab.id].desc}
            </p>
          </div>
          <div className="md:w-1/2 sticky block top-[40vh] mt-10 md:mt-0">
            <div className="rounded-2xl bg-white shadow-xl p-6 w-full h-80 flex flex-col items-center justify-center text-2xl font-bold">
              {tab.icon}
              <p className="mt-4">{tab.title}</p>
            </div>
          </div>
          </div>
        </div>
      ))} */}
    </section>
  );
}





