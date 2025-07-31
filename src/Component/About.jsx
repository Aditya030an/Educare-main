// // import React from "react";
// // import bgImage from "./photos/cube1.png";

// import justin from "./photos/img 1.png";
// import devin from "./photos/img 2.png";
// import frank from "./photos/img 3.png";
// import lucinda from "./photos/img 4.png";
// import hester from "./photos/img 5.png";
// import calvin from "./photos/img 6.png";
// import lora from "./photos/img 7.png";
// import brett from "./photos/img 8.png";

// const teamMembers = [
//   { name: "Justin Lyons", title: "Founder & CEO", image: justin },
//   { name: "Devin Bishp", title: "Chief Product officer", image: devin },
//   { name: "Frank Chavez", title: "Content Strategist", image: frank },
//   { name: "Lucinda Harmon", title: "Director of Finance", image: lucinda },
//   { name: "Hester Anderson", title: "Director of Engineering", image: hester },
//   { name: "Calvin Patrick", title: "Content Director", image: calvin },
//   { name: "Lora Mason", title: "Product Designer", image: lora },
//   { name: "Brett Reynolds", title: "Product Engineer", image: brett },
// ];

// // export default function TeamSection() {
// //   return (
// //     <section
// //       className="relative py-20 px-6 md:px-24 font-sans overflow-hidden"
// //     >
// //       {/* Background Image */}
// //       <div
// //         className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-left z-0"
// //         style={{ backgroundImage: `url(${bgImage})` }}
// //       ></div>

// //       {/* Content */}
// //       <div className="relative z-10">
// //         <div className="text-center mb-14">
// //           <span className="text-xs uppercase tracking-widest text-blue-500 bg-blue-100 px-3 py-1 rounded-full font-medium">
// //             Our Team
// //           </span>
// //           <h2 className="text-3xl md:text-5xl font-bold mt-4">
// //             Meet Our <span className="text-blue-500">Amazing</span> Squad
// //           </h2>
// //           <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
// //             A brief introduction about Educare, highlighting its core functionality and
// //             impact in the realm of Education Enterprise Applications
// //           </p>
// //         </div>

// //         {/* Team Grid */}
// //         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
// //           {teamMembers.map((member, idx) => (
// //             <div key={idx} className="text-center">
// //               <img
// //                 src={member.image}
// //                 alt={member.name}
// //                 className="w-32 h-32 rounded-xl object-cover mx-auto mb-4"
// //               />
// //               <h4 className="text-base md:text-lg font-semibold text-gray-900">{member.name}</h4>
// //               <p className="text-sm text-gray-500">{member.title}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import bgImage from "./photos/cube1.png";

// import justin from "./photos/img 1.png";
// import devin from "./photos/img 2.png";
// import frank from "./photos/img 3.png";
// import lucinda from "./photos/img 4.png";
// import hester from "./photos/img 5.png";
// import calvin from "./photos/img 6.png";
// import lora from "./photos/img 7.png";
// import brett from "./photos/img 8.png";

// gsap.registerPlugin(ScrollTrigger);

// const teamMembers = [
//   { name: "Justin Lyons", title: "Founder & CEO", image: justin },
//   { name: "Devin Bishp", title: "Chief Product officer", image: devin },
//   { name: "Frank Chavez", title: "Content Strategist", image: frank },
//   { name: "Lucinda Harmon", title: "Director of Finance", image: lucinda },
//   { name: "Hester Anderson", title: "Director of Engineering", image: hester },
//   { name: "Calvin Patrick", title: "Content Director", image: calvin },
//   { name: "Lora Mason", title: "Product Designer", image: lora },
//   { name: "Brett Reynolds", title: "Product Engineer", image: brett },
// ];

// export default function TeamSection() {
//   const sectionRef = useRef();
//   const bgRef = useRef();
//   const titleRef = useRef();
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Section fade in
//       gsap.from(sectionRef.current, {
//         opacity: 0,
//         y: 100,
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 85%",
//         },
//       });

//       // Background image parallax
//       gsap.to(bgRef.current, {
//         y: 80,
//         ease: "none",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top bottom",
//           scrub: true,
//         },
//       });

//       // Title fade and scale in
//       gsap.from(titleRef.current, {
//         opacity: 0,
//         scale: 0.9,
//         y: 30,
//         duration: 1,
//         delay: 0.3,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: titleRef.current,
//           start: "top 85%",
//         },
//       });

//       // Team cards animation
//       gsap.from(cardsRef.current, {
//         opacity: 0,
//         scale: 0.8,
//         rotateX: 30,
//         y: 50,
//         stagger: 0.15,
//         duration: 1.1,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: "top 75%",
//         },
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative pt-18 pb-20 px-4 md:px-24 font-sans"
//     >
//       {/* Background Image */}
//       <div
//         ref={bgRef}
//         className="absolute top-0 left-0 w-full h-full bg-no-repeat bg-cover bg-left z-0"
//         style={{ backgroundImage: `url(${bgImage})` }}
//       />

//       {/* Content */}
//       <div className="relative z-10">
//         <div ref={titleRef} className="text-center mb-14">
//           <span className="text-xs uppercase tracking-widest text-blue-500 bg-blue-100 px-3 py-1 rounded-full font-medium">
//             Our Team
//           </span>
//           <h2 className="text-3xl md:text-5xl font-bold mt-4">
//             Meet Our <span className="text-blue-500">Amazing</span> Squad
//           </h2>
//           <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
//             A brief introduction about Educare, highlighting its core functionality and
//             impact in the realm of Education Enterprise Applications.
//           </p>
//         </div>

//         {/* Team Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto mt-[-40px]">
//           {teamMembers.map((member, idx) => (
//             <div
//               key={idx}
//               ref={(el) => (cardsRef.current[idx] = el)}
//               className="text-center group transform transition-transform duration-300 hover:scale-[1.08] hover:-translate-y-2 hover:shadow-xl hover:rotate-[0.5deg]"
//             >
//               <img
//                 src={member.image}
//                 alt={member.name}
//                 className="w-32 h-32 rounded-xl object-cover mx-auto mb-4 shadow-lg transition-all duration-300 group-hover:shadow-blue-200"
//               />
//               <h4 className="text-base md:text-lg font-semibold text-gray-900">{member.name}</h4>
//               <p className="text-sm text-gray-500">{member.title}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




// animation edit

// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import justin from "./photos/img 1.png";
// import devin from "./photos/img 2.png";
// import frank from "./photos/img 3.png";
// import lucinda from "./photos/img 4.png";
// import hester from "./photos/img 5.png";
// import calvin from "./photos/img 6.png";
// import lora from "./photos/img 7.png";
// import brett from "./photos/img 8.png";

// gsap.registerPlugin(ScrollTrigger);

// const teamMembers = [
//   { name: "Justin Lyons", title: "Founder & CEO", image: justin },
//   { name: "Devin Bishp", title: "Chief Product officer", image: devin },
//   { name: "Frank Chavez", title: "Content Strategist", image: frank },
//   { name: "Lucinda Harmon", title: "Director of Finance", image: lucinda },
//   { name: "Hester Anderson", title: "Director of Engineering", image: hester },
//   { name: "Calvin Patrick", title: "Content Director", image: calvin },
//   { name: "Lora Mason", title: "Product Designer", image: lora },
//   { name: "Brett Reynolds", title: "Product Engineer", image: brett },
// ];

// export default function TeamSection() {
//   const sectionRef = useRef(null);
//   const scrollContainerRef = useRef(null);

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     const section = sectionRef.current;

//     const totalScrollWidth = scrollContainer.scrollWidth;
//     const containerWidth = section.offsetWidth;

//     gsap.to(scrollContainer, {
//       x: `-${totalScrollWidth - containerWidth}`,
//       ease: "none",
//       scrollTrigger: {
//         trigger: section,
//         start: "top top",
//         end: () => `${totalScrollWidth - containerWidth}`,
//         scrub: 1,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative w-full bg-white font-sans py-32 overflow-hidden"
//     >
//       {/* Section Heading */}
//       <div className="text-center mb-14 px-4 md:px-20">
//         <span className="uppercase text-xs tracking-widest text-blue-500 bg-blue-100 px-3 py-1 rounded-full font-medium">
//           Our Team
//         </span>
//         <h2 className="text-3xl md:text-5xl font-bold mt-4">
//           Meet Our <span className="text-blue-500">Amazing</span> Squad
//         </h2>
//         <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
//           A brief introduction about Educare, highlighting its core functionality and impact in the realm of Education Enterprise Applications
//         </p>
//       </div>

//       {/* Horizontal Scroll Container */}
//       <div
//         ref={scrollContainerRef}
//         className="flex gap-8 w-max px-4 md:px-20"
//       >
//         {teamMembers.map((member, i) => (
//           <div
//             key={i}
//             className="flex-shrink-0 w-[260px] text-center"
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="w-full h-auto rounded-xl shadow-md mb-4 object-cover"
//             />
//             <h4 className="font-semibold text-lg">{member.name}</h4>
//             <p className="text-sm text-gray-500">{member.title}</p>
//           </div>
//         ))}
//       </div>

//       {/* Post Scroll Content */}
//       <div className="h-[80vh] bg-white mt-20 flex items-center justify-center text-center px-6">
//         <div className="max-w-2xl">
//           <h3 className="text-2xl font-bold mb-3">Join Our Team</h3>
//           <p className="text-gray-600 text-sm mb-4">
//             We believe it takes great people to make a great product. That’s why we hire not only the perfect professional fits, but people who embody our company values.
//           </p>
//           <button className="text-sm font-semibold text-blue-600 underline hover:text-blue-800">
//             Explore integrations
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }
 


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

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: "Justin Lyons", title: "Founder & CEO", image: justin },
  { name: "Devin Bishp", title: "Chief Product officer", image: devin },
  { name: "Frank Chavez", title: "Content Strategist", image: frank },
  { name: "Lucinda Harmon", title: "Director of Finance", image: lucinda },
  { name: "Hester Anderson", title: "Director of Engineering", image: hester },
  { name: "Calvin Patrick", title: "Content Director", image: calvin },
  { name: "Lora Mason", title: "Product Designer", image: lora },
  { name: "Brett Reynolds", title: "Product Engineer", image: brett },
];

export default function TeamSection() {
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const section = sectionRef.current;
    const totalScrollWidth = scrollContainer.scrollWidth;
    const containerWidth = section.offsetWidth;

    gsap.to(scrollContainer, {
      x: `-${totalScrollWidth - containerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `${totalScrollWidth - containerWidth}`,
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
      {/* Magnetic Cursor */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-5 h-5 bg-blue-600 rounded-full pointer-events-none z-[1000] mix-blend-difference"
      ></div>

      {/* Animated Blobs */}
      <div className="blob-float absolute w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 top-[-5rem] left-[-10rem] z-0" />
      <div className="blob-float absolute w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 bottom-[-5rem] right-[-5rem] z-0" />

      {/* Section Heading */}
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

      {/* Horizontal Scroll Cards */}
      <div
        ref={scrollContainerRef}
        className="relative z-10 flex gap-10 w-max px-6 md:px-24 py-8"
      >
        {teamMembers.map((member, i) => (
          <div
            key={i}
            className="group flex-shrink-0 w-[280px] bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-5 text-center hover:scale-105 transition-transform duration-500 border border-white/30 hover:shadow-2xl"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-[280px] object-cover rounded-xl mb-4 group-hover:brightness-105 transition-all duration-300"
            />
            <h4 className="text-lg font-bold text-gray-800">{member.name}</h4>
            <p className="text-sm text-gray-600">{member.title}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative z-10 min-h-[80vh] mt-24 flex items-center justify-center px-6 bg-white/70 backdrop-blur-md">
        <div className="max-w-2xl text-center p-10 bg-white rounded-2xl shadow-xl border border-blue-100">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">🚀 Join Our Mission</h3>
          <p className="text-gray-600 text-base mb-6">
            We’re building tools that empower education. If you’re passionate, skilled, and driven — we want to work with you.
          </p>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition-all">
            See Open Positions
          </button>
        </div>
      </div>
    </section>
  );
}