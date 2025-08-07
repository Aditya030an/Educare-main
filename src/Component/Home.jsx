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

export default function OverlapPages() {
  return (
    <div className="">
      {/* Section 1 */}
      <div className="flex flex-col">
        <div className="w-full min-h-screen bg-gray-50">
          <Hero />
        </div>
        <div className="w-full min-h-screen ">
          <Cards />
        </div>
      </div>

      {/* Section 2 - About Section with Floating Blobs */}
      <div className="main w-full relative h-[300vh] md:h-[240vh]  bg-black flex flex-col ">
     <div className="head md:h-[30%] p-10  h-[50%] md:w-full flex flex-col items-center justify-center md:p-10">
      <div className="abt mb-5 md:px-5 px-3 py-1 md:py-2 bg-white rounded-full">
        <h1 className='text-lg font-semibold'>About</h1>
      </div>
      <h1 className='text-white text-[3rem] md:text-[4rem] '>
      Unleash The Power Of Data With Educare</h1>
     <p className='text-[1.2rem] md:w-1/2 w-full text-left md:text-center text-zinc-600'>Discover how Educare is revolutionizing education management through advanced analytics, AI-driven decision making, and seamless data orchestration.

</p>
     </div>
     
      <div className="contain  w-full h-full">

      <div className="card1 flex justify-between flex-col md:flex-row items-center w-full sticky top-10 h-[50vh] md:h-[40vh] bg-white/10">
   <div className="info w-full md:w-[40%] h-[40%] md:h-full  flex ">
   <div className="left p-5 flex items-start w-1/2 h-full ">
        <h1 className='text-[3rem] md:text-[5rem] text-white'>Vision</h1>
      </div>
      <div className="center  w-1/2 h-full ">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1753735880239-d2213c79d1e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" alt="" />
      </div>
   </div>
      <div className="right w-full md:w-[60%] px-4 md:p-10 h-full ">
        <p className='text-zinc-400 text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse odit exercitationem ipsam unde ducimus, ut in laudantium, earum sunt culpa ullam obcaecati id quis dicta rem architecto molestias reiciendis praesentium eligendi voluptas sint dolorem! Amet repellendus a ipsa modi.</p>
      </div>
      </div>
     
      <div className="card2 flex justify-between flex-col md:flex-row items-center w-full sticky top-20 h-[50vh] md:h-[40vh] bg-black">
   <div className="info w-full md:w-[40%] h-[40%] md:h-full  flex ">
   <div className="left p-5 flex items-start w-1/2 h-full ">
        <h1 className='text-[3rem] md:text-[5rem] text-white'>Mission</h1>
      </div>
      <div className="center  w-1/2 h-full ">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1754374325925-547540899995?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="" />
      </div>
   </div>
      <div className="right w-full md:w-[60%] px-4 md:p-10 h-full ">
        <p className='text-zinc-400 text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse odit exercitationem ipsam unde ducimus, ut in laudantium, earum sunt culpa ullam obcaecati id quis dicta rem architecto molestias reiciendis praesentium eligendi voluptas sint dolorem! Amet repellendus a ipsa modi.</p>
      </div>
      </div>
        <div className="card3 flex justify-between flex-col md:flex-row items-center w-full sticky top-30 h-[50vh] md:h-[40vh] bg-[#FBFDFF]">
   <div className="info w-full md:w-[40%] h-[40%] md:h-full  flex ">
   <div className="left p-5 flex items-start w-1/2 h-full ">
        <h1 className='text-[3rem] md:text-[5rem] text-black'>Goal</h1>
      </div>
      <div className="center  w-1/2 h-full ">
        <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1742201949674-a5084b01418c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
   </div>
      <div className="right w-full md:w-[60%] px-4 md:p-10 h-full ">
        <p className=  ' text-black md:text-zinc-600 font-normal text-md md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus esse odit exercitationem ipsam unde ducimus, ut in laudantium, earum sunt culpa ullam obcaecati id quis dicta rem architecto molestias reiciendis praesentium eligendi voluptas sint dolorem! Amet repellendus a ipsa modi.</p>
      </div>
      </div>
      </div>
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
