

// // FeaturedProducts.jsx
// import React, { useEffect, useRef } from "react";
// import {
//   FaChartBar,
//   FaClipboardList,
//   FaCheckSquare,
//   FaBrain,
//   FaSun,
// } from "react-icons/fa";
// import { MdInsertChart } from "react-icons/md";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
// import bgShape from "./photos/bg55.png";

// gsap.registerPlugin(ScrollTrigger, MorphSVGPlugin);

// export default function FeaturedProducts() {
//   const sectionRef = useRef();
//   const cardsRef = useRef([]);
//   const statsRef = useRef();

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Heading animation
//       gsap.from(".heading", {
//         y: 50,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       // Button animation
//       gsap.from(".toggle-btn", {
//         scale: 0.8,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.2,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 80%",
//         },
//       });

//       // Feature Cards Stagger
//       gsap.from(cardsRef.current, {
//         y: 100,
//         opacity: 0,
//         duration: 1,
//         stagger: 0.2,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 60%",
//         },
//       });

//       // Stats Box
//       gsap.from(statsRef.current, {
//         y: 100,
//         opacity: 0,
//         scale:0.5,
//         // duration: 3000,
//         // delay: 10,

//         duration: 1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: statsRef.current,
//           start: "top -20%",
//           scrub: 2 ,
//           markers:true
//         },
//       });

//       // Magnetic Buttons
//       const magneticBtns = document.querySelectorAll(".magnetic-wrapper");
//       magneticBtns.forEach((wrapper) => {
//         const btn = wrapper.querySelector(".magnetic");
//         wrapper.addEventListener("mousemove", (e) => {
//           const { left, top, width, height } = wrapper.getBoundingClientRect();
//           const x = e.clientX - left - width / 2;
//           const y = e.clientY - top - height / 2;
//           gsap.to(btn, {
//             x: x * 0.3,
//             y: y * 0.3,
//             duration: 0.4,
//             ease: "power3.out",
//           });
//         });
//         wrapper.addEventListener("mouseleave", () => {
//           gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: "power3.out" });
//         });
//       });

//       // Blob Morph
//       gsap.to("#morph", {
//         duration: 8,
//         repeat: -1,
//         yoyo: true,
//         ease: "power1.inOut",
//         morphSVG:
//           "M458.5,340Q408,420,327,414Q246,408,181,382.5Q116,357,109.5,289.5Q103,222,155.5,174Q208,126,275.5,132Q343,138,395.5,184Q448,230,458.5,290Q469,350,458.5,340Z",
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-[100vw] py-16 px-4 h-full md:px-20 font-sans overflow-hidden"
//     >
//       {/* Morphing Blob */}
//       <div className="absolute top-[-100px] right-[-100px] z-0 opacity-30">
//         <svg width="400" height="400" viewBox="0 0 600 600" fill="none">
//           <path
//             id="morph"
//             d="M438.5,309.5Q434,379,366.5,397Q299,415,246,391Q193,367,138.5,328.5Q84,290,123.5,231.5Q163,173,228,144.5Q293,116,347.5,159Q402,202,438.5,255Q475,308,438.5,309.5Z"
//             fill="#3b82f6"
//           />
//         </svg>
//       </div>

//       {/* Background */}
//       <div
//         className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
//         style={{ backgroundImage: `url(${bgShape})` }}
//       />

//       {/* Content Wrapper */}
//       <div className="relative z-10">
//         {/* Section Heading */}
//         <div className="text-center mb-14 heading">
//           <p className="uppercase text-blue-400 text-xs tracking-widest mb-2">
//             Products
//           </p>
//           <h2 className="text-3xl md:text-5xl font-semibold">
//             Our <span className="text-blue-600">Featured</span> Products
//           </h2>
//           <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
//             Connect, expose and visualize over 150 SaaS tools without
//             engineering method
//           </p>

//           {/* Toggle Buttons */}
//           <div className="mt-6 flex justify-center gap-4">
//             <div className="magnetic-wrapper">
//               <button className="toggle-btn magnetic bg-blue-600 text-white px-4 py-2 rounded-full text-sm shadow-md hover:bg-blue-700">
//                 For Business
//               </button>
//             </div>
//             <div className="magnetic-wrapper">
//               <button className="toggle-btn magnetic border border-blue-600 text-blue-600 px-4 py-2 rounded-full text-sm hover:bg-blue-50">
//                 For School
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Feature Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center text-gray-700">
//           {features.map((feature, i) => (
//             <FeatureCard
//               key={i}
//               ref={(el) => (cardsRef.current[i] = el)}
//               icon={feature.icon}
//               title={feature.title}
//             />
//           ))}
//         </div>

//         {/* Stats Box */}
//         <div
//           ref={statsRef}
//           className="mt-20 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row justify-around items-center text-center gap-6"
//         >
//           <StatBlock number="110+" />
//           <StatBlock number="4M" />
//           <StatBlock number="99.99%" />
//         </div>
//       </div>
//     </section>
//   );
// }

// const features = [
//   {
//     icon: <FaChartBar className="text-3xl text-blue-500 mx-auto mb-4" />,
//     title: "Rich Analytics",
//   },
//   {
//     icon: <HiOutlineDocumentReport className="text-3xl text-blue-500 mx-auto mb-4" />,
//     title: "Report",
//   },
//   {
//     icon: <MdInsertChart className="text-3xl text-blue-500 mx-auto mb-4" />,
//     title: "Exams",
//   },
//   {
//     icon: <FaCheckSquare className="text-3xl text-blue-500 mx-auto mb-4" />,
//     title: "E Classroom",
//   },
//   {
//     icon: <FaBrain className="text-3xl text-blue-500 mx-auto mb-4" />,
//     title: "Activities",
//   },
//   {
//     icon: <FaSun className="text-3xl text-blue-500 mx-auto mb-4" />,
//     title: "Effective",
//   },
// ];

// const FeatureCard = React.forwardRef(({ icon, title }, ref) => {
//   const cardRef = useRef();

//   useEffect(() => {
//     const card = cardRef.current;
//     const handleMouseMove = (e) => {
//       const { left, top, width, height } = card.getBoundingClientRect();
//       const x = e.clientX - left;
//       const y = e.clientY - top;
//       const rotateX = -(y - height / 2) / 15;
//       const rotateY = (x - width / 2) / 15;

//       gsap.to(card, {
//         rotationX: rotateX,
//         rotationY: rotateY,
//         transformPerspective: 800,
//         transformOrigin: "center",
//         duration: 0.4,
//       });
//     };

//     const reset = () => {
//       gsap.to(card, {
//         rotationX: 0,
//         rotationY: 0,
//         duration: 0.4,
//       });
//     };

//     card.addEventListener("mousemove", handleMouseMove);
//     card.addEventListener("mouseleave", reset);

//     return () => {
//       card.removeEventListener("mousemove", handleMouseMove);
//       card.removeEventListener("mouseleave", reset);
//     };
//   }, []);

//   return (
//     <div
//       ref={(el) => {
//         cardRef.current = el;
//         if (ref) ref.current = el;
//       }}
//       className="p-4 bg-white rounded-xl shadow-lg transition-all hover:shadow-2xl"
//     >
//       {icon}
//       <h4 className="text-lg font-semibold mb-2">{title}</h4>
//       <p className="text-sm text-gray-500">
//         Easy data management with a dedicated admin panel and a developer
//         platform to extend what Polio CRM can do.
//       </p>
//     </div>
//   );
// });

// const StatBlock = ({ number }) => (
//   <div>
//     <h3 className="text-3xl md:text-4xl font-bold">{number}</h3>
//     <p className="text-sm mt-1">
//       Automation Templates For Creating Your Campaigns Quickly
//     </p>
//   </div>
// );





// // FeaturedProducts.jsx
// import React, { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// const tabs = [
//   { id: "billing", label: "Billing", color: "bg-pink-200" },
//   { id: "charging", label: "Charging", color: "bg-yellow-200" },
//   { id: "catalog", label: "Catalog", color: "bg-green-200" },
//   { id: "events", label: "Events", color: "bg-cyan-200" },
// ];

// const content = {
//   billing: {
//     title: "Real-Time Convergent Billing",
//     desc: "Instantaneous, accurate billing across all services and payment methods.",
//   },
//   charging: {
//     title: "Flexible Charging Options",
//     desc: "Support for multiple pricing models and real-time usage tracking.",
//   },
//   catalog: {
//     title: "Unified Product Catalog",
//     desc: "Centralized management of all your services and offers.",
//   },
//   events: {
//     title: "Event Monitoring",
//     desc: "Real-time monitoring and alerting on all service events.",
//   },
// };

// export default function FeaturedProducts() {
//   const containerRef = useRef();
//   const [activeTab, setActiveTab] = useState("billing");

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       tabs.forEach((tab) => {
//         ScrollTrigger.create({
//           trigger: `#section-${tab.id}`,
//           start: "top center",
//           end: "bottom center",
//           onEnter: () => setActiveTab(tab.id),
//           onEnterBack: () => setActiveTab(tab.id),
//         });
//       });
//     }, containerRef);
//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="w-screen min-h-screen bg-[#90a4ae] text-gray-900 overflow-x-hidden"
//     >
//       <div className="sticky top-0 z-50 bg-[#90a4ae] py-4">
//         <div className="w-full px-4 md:px-20">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4">BSS/OSS Capabilities</h2>
//           <div className="flex gap-4 flex-wrap">
//             {tabs.map((tab) => (
//               <div
//                 key={tab.id}
//                 className={`px-4 py-2 rounded-xl text-sm font-mono flex items-center gap-2 cursor-pointer transition-all duration-300
//                   ${activeTab === tab.id ? tab.color + " shadow-md" : "bg-gray-400/30"}`}
//               >
//                 <span className="w-4 h-4 rounded-full bg-black"></span>
//                 {tab.label.toUpperCase()}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {tabs.map((tab) => (
//         <div
//           id={`section-${tab.id}`}
//           key={tab.id}
//           className="min-h-screen w-full px-4 md:px-20 py-20 flex flex-col md:flex-row justify-between items-center"
//         >
//           <div className="md:w-1/2">
//             <h3 className="text-2xl md:text-4xl font-bold mb-4">
//               {content[tab.id].title}
//             </h3>
//             <p className="text-lg text-gray-800 max-w-md">
//               {content[tab.id].desc}
//             </p>
//           </div>
//           <div className="md:w-1/2 mt-10 md:mt-0">
//             <div className="rounded-2xl bg-white shadow-xl p-6 w-full h-80 flex items-center justify-center text-2xl font-bold">
//               EMS UI for {tab.label}
//             </div>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }





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
      <div className="sticky top-0 z-50 bg-[#90a4ae] py-4">
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
      </div>
  <Lower/>
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





