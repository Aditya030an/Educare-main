// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaChartBar, FaCheckSquare, FaBrain, FaSun } from "react-icons/fa";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { MdInsertChart } from "react-icons/md";

// gsap.registerPlugin(ScrollTrigger);

// const cardsData = [
//   {
//     className: "card1",
//     icon: <FaChartBar className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Rich Analytics",
//     desc: "Track and visualize performance trends with actionable insights.",
//     top: "top-[10vh]",
//   },
//   {
//     className: "card2",
//     icon: <HiOutlineDocumentReport className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Report Generation",
//     desc: "Generate comprehensive reports to monitor KPIs and business metrics.",
//     top: "top-[12vh]",
//   },
//   {
//     className: "card3",
//     icon: <MdInsertChart className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Exam Management",
//     desc: "Organize, schedule, and analyze exam results efficiently.",
//     top: "top-[14vh]",
//   },
//   {
//     className: "card4",
//     icon: <FaCheckSquare className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "E-Classroom Integration",
//     desc: "Enable virtual learning with live sessions, materials, and feedback.",
//     top: "top-[16vh]",
//   },
//   {
//     className: "card5",
//     icon: <FaBrain className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Activity Tracker",
//     desc: "Keep a log of student activities and engagement in real time.",
//     top: "top-[18vh]",
//   },
//   {
//     className: "card6",
//     icon: <FaSun className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Effective Operations",
//     desc: "Enhance operational efficiency through smart automations.",
//     top: "top-[20vh]",
//   },
// ];

// // Vibrant and visually appealing colors
// const cardsBgColors = [
//   "#AFEEEE", // Vibrant teal
//   "#FF6F61", // Vibrant coral
//   "#FFD600", // Vibrant yellow
//   "#7C4DFF", // Vibrant purple
//   "#00B8D4", // Vibrant cyan
//   "#FF8A65", // Vibrant orange
// ];

// // Matching/complementary card inner backgrounds
// const cardInnerBgColors = [
//   "#E0FFF7", // Light teal
//   "#FFEAE7", // Light coral
//   "#FFF9E0", // Light yellow
//   "#F3EFFF", // Light purple
//   "#E0FBFF", // Light cyan
//   "#FFF1E7", // Light orange
// ];

// const Cards = () => {
//   const [activeIdx, setActiveIdx] = useState(0);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     // GSAP animations for each card
//     cardsData.forEach((card, idx) => {
//       gsap.to(`.${card.className}`, {
//         scale: 0.7 + idx * 0.05,
//         top: 10 + idx * 2,
//         duration: 1,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: `.${card.className}`,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//           onEnter: () => setActiveIdx(idx),
//           onEnterBack: () => setActiveIdx(idx),
//         },
//       });
//     });

//     // Cleanup
//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <div
//       className="main w-full h-auto flex flex-col justify-center items-center p-[10vh] gap-4"
//       style={{ background: cardsBgColors[activeIdx], transition: 'background 0.5s' }}
//     >
//       {cardsData.map((card, idx) => (
//         <div
//           key={card.className}
//           ref={el => (cardRefs.current[idx] = el)}
//           className={`${card.className} overflow-hidden shadow-lg p-1 w-[90vw] sticky rounded-xl z-10 ${card.top} h-[70vh]`}
//         >
//           <div
//             className="card flex flex-col items-center rounded-xl justify-evenly py-10 gap-10 w-full h-full relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
//             style={{ background: cardInnerBgColors[activeIdx], transition: 'background 0.5s' }}
//           >
//             <div className="top z-10 text-center w-[40%]">
//               <h1 className="text-6xl font-bold">{card.title}</h1>
//             </div>
//             <div className="center flex items-center justify-center">
//               {card.icon}
//             </div>
//             <div className="right z-10 text-center w-[60%]">
//               <p className="text-2xl text-gray-900">{card.desc}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;




// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaChartBar, FaCheckSquare, FaBrain, FaSun } from "react-icons/fa";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { MdInsertChart } from "react-icons/md";

// gsap.registerPlugin(ScrollTrigger);

// const cardsData = [
//   {
//     className: "card1",
//     icon: <FaChartBar className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Rich Analytics",
//     desc: "Track and visualize performance trends with actionable insights.",
//     top: "top-[10vh]",
//   },
//   {
//     className: "card2",
//     icon: <HiOutlineDocumentReport className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Report Generation",
//     desc: "Generate comprehensive reports to monitor KPIs and business metrics.",
//     top: "top-[12vh]",
//   },
//   {
//     className: "card3",
//     icon: <MdInsertChart className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Exam Management",
//     desc: "Organize, schedule, and analyze exam results efficiently.",
//     top: "top-[14vh]",
//   },
//   {
//     className: "card4",
//     icon: <FaCheckSquare className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "E-Classroom Integration",
//     desc: "Enable virtual learning with live sessions, materials, and feedback.",
//     top: "top-[16vh]",
//   },
//   {
//     className: "card5",
//     icon: <FaBrain className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Activity Tracker",
//     desc: "Keep a log of student activities and engagement in real time.",
//     top: "top-[18vh]",
//   },
//   {
//     className: "card6",
//     icon: <FaSun className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Effective Operations",
//     desc: "Enhance operational efficiency through smart automations.",
//     top: "top-[20vh]",
//   },
// ];

// // Refined soft color palette for light theme
// const cardsBgColors = [
//   "#F5F7FA", // Soft gray-white
//   "#E8F0FE", // Soft blue
//   "#FFF8E1", // Soft yellow
//   "#F3E5F5", // Light lavender
//   "#E0F7FA", // Light aqua
//   "#FFF3E0", // Light peach
// ];

// const cardInnerBgColors = [
//   "#FFFFFF", // Clean white
//   "#F1F5FE", // Very light blue
//   "#FFFBEA", // Pale yellow
//   "#F9F3FB", // Pale lavender
//   "#F0FCFC", // Very light aqua
//   "#FFF8F1", // Pale peach
// ];

// const Cards = () => {
//   const [activeIdx, setActiveIdx] = useState(0);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     cardsData.forEach((card, idx) => {
//       gsap.to(`.${card.className}`, {
//         scale: 0.7 + idx * 0.05,
//         top: 10 + idx * 2,
//         duration: 1,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: `.${card.className}`,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//           onEnter: () => setActiveIdx(idx),
//           onEnterBack: () => setActiveIdx(idx),
//         },
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <div
//       className="main w-full h-auto flex flex-col justify-center items-center p-[10vh] gap-4"
//       style={{ background: cardsBgColors[activeIdx], transition: 'background 0.5s' }}
//     >
//       {cardsData.map((card, idx) => (
//         <div
//           key={card.className}
//           ref={el => (cardRefs.current[idx] = el)}
//           className={`${card.className} overflow-hidden shadow-lg p-1 w-[90vw] sticky rounded-xl z-10 ${card.top} h-[70vh]`}
//         >
//           <div
//             className="card flex flex-col items-center rounded-xl justify-evenly py-10 gap-10 w-full h-full relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
//             style={{ background: cardInnerBgColors[activeIdx], transition: 'background 0.5s' }}
//           >
//             <div className="top z-10 text-center w-[40%]">
//               <h1 className="text-6xl font-bold">{card.title}</h1>
//             </div>
//             <div className="center flex items-center justify-center">
//               {card.icon}
//             </div>
//             <div className="right z-10 text-center w-[60%]">
//               <p className="text-2xl text-gray-900">{card.desc}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;




// import React, { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { FaChartBar, FaCheckSquare, FaBrain, FaSun } from "react-icons/fa";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { MdInsertChart } from "react-icons/md";

// gsap.registerPlugin(ScrollTrigger);

// const cardsData = [
//   {
//     className: "card1",
//     icon: <FaChartBar className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Rich Analytics",
//     desc: "Track and visualize performance trends with actionable insights.",
//     top: "top-[10vh]",
//   },
//   {
//     className: "card2",
//     icon: <HiOutlineDocumentReport className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Report Generation",
//     desc: "Generate comprehensive reports to monitor KPIs and business metrics.",
//     top: "top-[12vh]",
//   },
//   {
//     className: "card3",
//     icon: <MdInsertChart className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Exam Management",
//     desc: "Organize, schedule, and analyze exam results efficiently.",
//     top: "top-[14vh]",
//   },
//   {
//     className: "card4",
//     icon: <FaCheckSquare className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "E-Classroom Integration",
//     desc: "Enable virtual learning with live sessions, materials, and feedback.",
//     top: "top-[16vh]",
//   },
//   {
//     className: "card5",
//     icon: <FaBrain className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Activity Tracker",
//     desc: "Keep a log of student activities and engagement in real time.",
//     top: "top-[18vh]",
//   },
//   {
//     className: "card6",
//     icon: <FaSun className="text-7xl text-blue-500 mx-auto mb-4" />,
//     title: "Effective Operations",
//     desc: "Enhance operational efficiency through smart automations.",
//     top: "top-[20vh]",
//   },
// ];

// // Light aesthetic theme
// const cardsBgColors = [
//   "#F5F7FA", // Soft gray-white
//   "#E8F0FE", // Soft blue
//   "#FFF8E1", // Soft yellow
//   "#F3E5F5", // Light lavender
//   "#E0F7FA", // Light aqua
//   "#FFF3E0", // Light peach
// ];

// const cardInnerBgColors = [
//   "#FFFFFF", // Clean white
//   "#F1F5FE", // Very light blue
//   "#FFFBEA", // Pale yellow
//   "#F9F3FB", // Pale lavender
//   "#F0FCFC", // Very light aqua
//   "#FFF8F1", // Pale peach
// ];

// const Cards = () => {
//   const [activeIdx, setActiveIdx] = useState(0);
//   const cardRefs = useRef([]);

//   useEffect(() => {
//     cardsData.forEach((card, idx) => {
//       gsap.to(`.${card.className}`, {
//         scale: 0.7 + idx * 0.05,
//         top: 10 + idx * 2,
//         duration: 1,
//         ease: "power2.inOut",
//         scrollTrigger: {
//           trigger: `.${card.className}`,
//           start: "top center",
//           end: "bottom center",
//           scrub: true,
//           onEnter: () => setActiveIdx(idx),
//           onEnterBack: () => setActiveIdx(idx),
//         },
//       });
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((st) => st.kill());
//     };
//   }, []);

//   return (
//     <div
//       className="main w-full h-auto flex flex-col justify-center items-center p-[10vh] gap-4"
//       style={{ background: cardsBgColors[activeIdx], transition: 'background 0.5s' }}
//     >
//       {/* Heading Section */}
//       <div className="text-center mb-10">
//         <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full tracking-widest uppercase">
//           Products
//         </span>
//         <h2 className="text-4xl font-semibold mt-4">
//           Our <span className="text-blue-600 font-bold">Featured</span> Products
//         </h2>
//         <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
//           Connect, expose, and visualize over 150 SaaS tools <br />
//           without engineering methods.
//         </p>
//         <div className="mt-6 flex justify-center gap-4">
//           <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
//             For Business
//           </button>
//           <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-50 transition">
//             For School
//           </button>
//         </div>
//       </div>

//       {/* Cards */}
//       {cardsData.map((card, idx) => (
//         <div
//           key={card.className}
//           ref={(el) => (cardRefs.current[idx] = el)}
//           className={`${card.className} overflow-hidden shadow-lg p-1 w-[90vw] sticky rounded-xl z-10 ${card.top} h-[70vh]`}
//         >
//           <div
//             className="card flex flex-col items-center rounded-xl justify-evenly py-10 gap-10 w-full h-full relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
//             style={{ background: cardInnerBgColors[activeIdx], transition: 'background 0.5s' }}
//           >
//             <div className="top z-10 text-center w-[40%]">
//               <h1 className="text-6xl font-bold">{card.title}</h1>
//             </div>
//             <div className="center flex items-center justify-center">
//               {card.icon}
//             </div>
//             <div className="right z-10 text-center w-[60%]">
//               <p className="text-2xl text-gray-900">{card.desc}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Cards;






import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChartBar, FaCheckSquare, FaBrain, FaSun } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdInsertChart } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const cardsData = [
  {
    className: "card0",
    icon: <FaChartBar className="text-6xl text-blue-500 mx-auto mb-4" />,
    title: "Rich Analytics",
    desc: "Track and visualize performance trends with actionable insights.",
    top: "top-[10vh]",
  },

  

  {
    className: "card2",
    icon: <HiOutlineDocumentReport className="text-6xl text-blue-500 mx-auto mb-4" />,
    title: "Report Generation",
    desc: "Generate comprehensive reports to monitor KPIs and business metrics.",
    top: "top-[12vh]",
  },
  {
    className: "card3",
    icon: <MdInsertChart className="text-6xl text-blue-500 mx-auto mb-4" />,
    title: "Exam Management",
    desc: "Organize, schedule, and analyze exam results efficiently.",
    top: "top-[14vh]",
  },
  {
    className: "card4",
    icon: <FaCheckSquare className="text-6xl text-blue-500 mx-auto mb-4" />,
    title: "E-Classroom Integration",
    desc: "Enable virtual learning with live sessions, materials, and feedback.",
    top: "top-[16vh]",
  },
  {
    className: "card5",
    icon: <FaBrain className="text-6xl text-blue-500 mx-auto mb-4" />,
    title: "Activity Tracker",
    desc: "Keep a log of student activities and engagement in real time.",
    top: "top-[18vh]",
  },
  {
    className: "card6",
    icon: <FaSun className="text-6xl text-blue-500 mx-auto mb-4" />,
    title: "Effective Operations",
    desc: "Enhance operational efficiency through smart automations.",
    top: "top-[20vh]",
  },
];

// Light aesthetic theme
const cardsBgColors = [
  "#F5F7FA",
  "#E8F0FE",
  "#FFF8E1",
  "#F3E5F5",
  "#E0F7FA",
  "#FFF3E0",
];

const cardInnerBgColors = [
  "#FFFFFF",
  "#F1F5FE",
  "#FFFBEA",
  "#F9F3FB",
  "#F0FCFC",
  "#FFF8F1",
];

const Cards = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef([]);

  useEffect(() => {
    cardsData.forEach((card, idx) => {
      gsap.to(`.${card.className}`, {
        // scale: 0.7 + idx * 0.05,
        top: 60 + idx * 10,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: `.${card.className}`,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onEnter: () => setActiveIdx(idx),
          onEnterBack: () => setActiveIdx(idx),
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    // <div
    //   className="main w-full h-auto flex flex-col justify-center items-center p-[10vh] gap-4"
    //   style={{ background: cardsBgColors[activeIdx], transition: 'background 0.5s' }}
    // >
    //   {/* Heading Section */}
    //   <div className="text-center mb-10">
    //     <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full tracking-widest uppercase">
    //       Products
    //     </span>
    //     <h2 className="text-4xl font-semibold mt-4">
    //       Our <span className="text-blue-600 font-bold">Featured</span> Products
    //     </h2>
    //     <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
    //       Connect, expose, and visualize over 150 SaaS tools <br />
    //       without engineering methods.
    //     </p>
    //     <div className="mt-6 flex justify-center gap-4">
    //       <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
    //         For Business
    //       </button>
    //       <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-50 transition">
    //         For School
    //       </button>
    //     </div>
    //   </div>

    //   {/* Cards */}
    //   {cardsData.map((card, idx) => (
    //     <div
    //       key={card.className}
    //       ref={(el) => (cardRefs.current[idx] = el)}
    //       className={`${card.className} overflow-hidden shadow-lg p-1 w-full max-w-5xl sticky rounded-xl z-10 ${card.top} h-[50vh]`}
    //     >
    //       <div
    //         className="card flex flex-col items-center rounded-xl justify-evenly py-6 gap-6 w-full h-full relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
    //         style={{
    //           background: cardInnerBgColors[activeIdx],
    //           transition: "background 0.5s",
    //         }}
    //       >
    //         <div className="top z-10 text-center w-[70%]">
    //           <h1 className="text-3xl font-semibold">{card.title}</h1>
    //         </div>
    //         <div className="center flex items-center justify-center">
    //           {card.icon}
    //         </div>
    //         <div className="right z-10 text-center w-[80%]">
    //           <p className="text-lg text-gray-900">{card.desc}</p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    
    <div className="main w-full min-h-[50vh] p-5 md:p-10 md:min-h-screen ">
       <div className="text-center w-full mb-0 md:mb-10">
        <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full tracking-widest uppercase">
          Products
        </span>
        <h2 className="text-4xl font-semibold mt-4">
          Our <span className="text-blue-600 font-bold">Featured</span> Products
        </h2>
        <p className="text-gray-500 text-base mt-4 max-w-xl mx-auto">
          Connect, expose, and visualize over 150 SaaS tools <br />
          without engineering methods.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition">
            For Business
          </button>
          <button className="border border-blue-600 text-blue-600 px-5 py-2 rounded-md hover:bg-blue-50 transition">
            For School
          </button>
        </div>
      </div> 
      
    <div className="content flex md:flex-row flex-col   md:min-h-screen justify-between items-center md:p-[10vh] p-10 gap-4">
    <div className="left  md:w-1/2 w-full md:order-1 order-2 min-h-screen flex flex-col justify-center items-center">
      {cardsData.map((card, idx) => (
        <div
          key={card.className}
          ref={(el) => (cardRefs.current[idx] = el)}
          className={`${card.className} overflow-hidden  mb-10 border-2 border-[#C8D5E4]  rounded-[3rem] p-1 w-full max-w-5xl sticky top-[30vh] md:top-10 rounded-[2rem] z-10 ${card.top} h-[50vh]`}
          style={{
            background: "#C6DAF6",
          }}
        >
          <div
                className="card flex flex-col items-center   rounded-xl justify-evenly py-6 gap-6 w-full h-full relative transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
            style={{
              transition: "background 0.5s",
            }}
          >
            <div className="top z-10 text-center w-[70%]">
              <h1 className="text-3xl font-semibold">{card.title}</h1>
            </div>
            <div className="center flex items-center justify-center">
              {card.icon}
            </div>
            <div className="right z-10 text-center w-[80%]">
              <p className="text-lg text-gray-900">{card.desc}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className="right md:w-1/2 w-full md:order-2 order-1 md:h-[300vh] h-[fit]  relative  ">
              <div  className="box w-full  shadow-none md:shadow-[rgba(0, 0, 0, 0.35) 0px 5px 15px] md:h-fit p-0  md:p-10 h-full flex flex-col justify-center items-center bg-white md:sticky  top-[10vh]  rounded-xl shadow-xl ">
      <img className="w-full md:w-full h-fit md:h-full object-cover" src="https://www.edwiseinternational.com/img/homepage/foreign-education-consultants.webp" alt="" />
      </div>
    </div>
       
      </div>
    </div>
    
    
  )
};

export default Cards;
