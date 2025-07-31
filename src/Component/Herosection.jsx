

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import dashboardImg from "./photos/banner.svg";
import bgShape from "./photos/bg55.png";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function MagneticButton({ children, className }) {
  const btnRef = useRef();

  useEffect(() => {
    const btn = btnRef.current;
    const moveMagnet = (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        ease: "power2.out",
        duration: 0.3,
      });
    };
    const resetMagnet = () => {
      gsap.to(btn, { x: 0, y: 0, ease: "power2.out", duration: 0.5 });
    };
    btn.addEventListener("mousemove", moveMagnet);
    btn.addEventListener("mouseleave", resetMagnet);
    return () => {
      btn.removeEventListener("mousemove", moveMagnet);
      btn.removeEventListener("mouseleave", resetMagnet);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      className={`relative inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-blue-600 shadow-lg hover:bg-blue-700 transition-all duration-300 ${className}`}
    >
      {children}
    </button>
  );
}

export default function HeroSection() {
  const sectionRef = useRef();
  const imageRef = useRef();
  const headingRef = useRef();
  const flareRef = useRef();
  const lineRef = useRef();
  const cursorRef = useRef();
  const cursorDotRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        headingRef.current,
        {
          y: 80,
          opacity: 0,
          rotateX: 35,
          skewY: 10,
          transformOrigin: "top center",
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          skewY: 0,
          duration: 1.6,
          ease: "power4.out",
        }
      ).fromTo(
        imageRef.current,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
          rotateY: 45,
          transformOrigin: "center",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1.2"
      );

      // 🧼 Removed the bounce animation here

      gsap.to(sectionRef.current, {
        backgroundPosition: "50% 40%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(lineRef.current, {
        strokeDasharray: 1000,
        strokeDashoffset: 1000,
        duration: 2,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });

      const mm = gsap.matchMedia();
      mm.add("(pointer: fine)", () => {
        document.body.style.cursor = "none";
        gsap.set([cursorRef.current, cursorDotRef.current], {
          xPercent: -50,
          yPercent: -50,
        });

        window.addEventListener("mousemove", (e) => {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            ease: "power3",
            duration: 0.15,
          });
          gsap.to(cursorDotRef.current, {
            x: e.clientX,
            y: e.clientY,
            ease: "power1",
            duration: 0.3,
          });
        });
      });

      const img = imageRef.current;
      img.addEventListener("mouseenter", () => {
        gsap.fromTo(
          flareRef.current,
          { opacity: 0, scale: 0.3 },
          { opacity: 0.7, scale: 1, duration: 0.8, ease: "expo.out" }
        );
      });

      img.addEventListener("mouseleave", () => {
        gsap.to(flareRef.current, {
          opacity: 0,
          scale: 0.3,
          duration: 0.6,
          ease: "power2.out",
        });
      });

      img.addEventListener("click", (e) => {
        for (let i = 0; i < 15; i++) {
          const dot = document.createElement("div");
          document.body.appendChild(dot);
          gsap.set(dot, {
            x: e.clientX,
            y: e.clientY,
            width: 6,
            height: 6,
            background: "#60a5fa",
            borderRadius: "50%",
            position: "fixed",
            zIndex: 50,
          });
          gsap.to(dot, {
            x: e.clientX + (Math.random() - 0.5) * 200,
            y: e.clientY + (Math.random() - 0.5) * 200,
            opacity: 0,
            duration: 1.2 + Math.random(),
            ease: "power2.out",
            onComplete: () => dot.remove(),
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={cursorRef} className="fixed w-8 h-8 bg-white rounded-full pointer-events-none mix-blend-difference z-[1000]"></div>
      <div ref={cursorDotRef} className="fixed w-3 h-3 bg-blue-400 rounded-full pointer-events-none z-[1000]"></div>

      <div className="relative w-[100vw] h-full bg-gray-50 overflow-hidden">
        <section
          ref={sectionRef}
          className="relative w-full h-full px-6 md:px-24 py-12 flex items-center justify-center"
        >
          <div
            className="absolute inset-0 bg-cover bg-center blur-sm scale-110"
            style={{ backgroundImage: `url(${bgShape})` }}
          />

          <svg
            ref={lineRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 600 600"
          >
            <path
              d="M50,550 C150,450 450,650 550,50"
              stroke="#3b82f6"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <div className="absolute inset-0 pointer-events-none">
            <svg viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path fill="url(#grad2)">
                <animate
                  attributeName="d"
                  dur="12s"
                  repeatCount="indefinite"
                  values="
                    M400,200 C550,200 550,600 400,600 C250,600 250,200 400,200 Z;
                    M420,220 C580,180 520,620 380,580 C240,620 220,220 420,220 Z;
                    M400,200 C550,200 550,600 400,600 C250,600 250,200 400,200 Z
                  "
                />
              </path>
            </svg>
          </div>

          <div className="relative flex flex-col-reverse md:flex-row items-center gap-10 max-w-7xl w-full">
            <div className="md:w-1/2 z-999 text-center md:text-left space-y-6">
              <h1
                ref={headingRef}
                className="text-5xl md:text-[5.15rem] font-extrabold text-gray-900"
              >
                Modern <span className="text-blue-600">ERP</span> Solution
                <br />
                for Your <span className="text-blue-500">School</span>
              </h1>
              <p className="text-gray-600 text-lg md:text-xl max-w-md mx-auto md:mx-0">
                Unleash smart storage, file sharing, secure collaboration – without subscriptions.
              </p>
              <MagneticButton>🚀 Get Started</MagneticButton>
            </div>

            <div ref={imageRef} className="md:w-1/2 relative cursor-pointer">
              <img
                src={dashboardImg}
                alt="Dashboard"
                className="rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.15)]"
              />
              <div
                ref={flareRef}
                className="absolute top-0 left-0 w-full h-full pointer-events-none backdrop-blur-xl bg-white/30 opacity-0 mix-blend-screen rounded-3xl"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}