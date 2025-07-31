import React from "react";
import jitter from "./logos/jitter.svg";
import krisp from "./logos/krisp.svg";
import feedly from "./logos/feedly.svg";
import draftbit from "./logos/draftbit.svg";
import hellosign from "./logos/hellosign.svg";
import grammarly from "./logos/grammarly.svg";
import peopleai from "./logos/peopleai.svg";
import livechat from "./logos/livechat.svg";
import sketch from "./logos/sketch.svg";
import mapbox from "./logos/mapbox.svg";
import metamask from "./logos/metamask.svg";
import pendo from "./logos/pendo.svg";

export default function Clients() {
  const logos = [
    { src: jitter, alt: "Jitter" },
    { src: krisp, alt: "Krisp" },
    { src: feedly, alt: "Feedly" },
    { src: draftbit, alt: "Draftbit" },
    { src: hellosign, alt: "Hellosign" },
    { src: grammarly, alt: "Grammarly" },
    { src: peopleai, alt: "PeopleAI" },
    { src: livechat, alt: "LiveChat" },
    { src: sketch, alt: "Sketch" },
    { src: mapbox, alt: "Mapbox" },
    { src: metamask, alt: "MetaMask" },
    { src: pendo, alt: "Pendo" },
  ];

  return (
    <section className="bg-[#f9fbfe] py-20 px-4 md:px-24 text-center font-sans">
      <div className="mb-8">
        <span className="uppercase text-xs tracking-widest text-blue-500 bg-blue-100 px-4 py-1 rounded-full font-medium">
          Our Clients
        </span>
        <p className="mt-4 text-sm md:text-base text-gray-500">
          Trusted By 20,000+ Clients <span className="text-blue-500">★★★★★</span>
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold mt-3">
          They <span className="text-blue-500">Trust</span> Us.
        </h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-10 max-w-6xl mx-auto">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition w-[140px] h-[60px] flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="max-h-8 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}