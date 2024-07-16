import React from "react";

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
            Wir schaffen Raum – 
            <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
              {" "}
              Professionell und zuverlässig 
            </span>
          </h1>
          <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Bei Sacaj Baudesign stehen Qualität, Zuverlässigkeit und Kundenzufriedenheit im Mittelpunkt. 
          Unser erfahrenes Team setzt Visionen präzise und engagiert um, wobei Integrität und offene Kommunikation unsere Arbeit prägen. 
          Wir schaffen beeindruckende Räume durch innovativen Trockenbau und höchste Standards.
          </p>
          
        </div>
      );
    };

export default HeroSection;