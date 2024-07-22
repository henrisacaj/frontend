import video1 from "/assets/video1.mp4";
import video2 from "/assets/video2.mp4";


const HeroSection = () => {
    return (
      <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Räume gestalten,
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Visionen verwirklichen
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Bei Sacaj Baudesign stehen Qualität, Zuverlässigkeit und Kundenzufriedenheit im Mittelpunkt. 
          Unser erfahrenes Team setzt Visionen präzise und engagiert um, wobei Integrität und offene Kommunikation unsere Arbeit prägen. 
          Wir schaffen beeindruckende Räume durch innovativen Trockenbau und höchste Standards.
      </p>
      <div className="flex mt-10 justify-center">
        <video
          playsInline
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          playsInline
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
      );
    };

export default HeroSection;