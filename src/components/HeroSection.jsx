import video1 from "/assets/video1.mp4";
import video2 from "/assets/video2.mp4";


const HeroSection = () => {
    return (
      <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
      Malerarbeiten, Trockenbau und Fassadensanierung 
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">in Fulda </h1>
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          Räume gestalten, Visionen verwirklichen
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Sacaj Baudesign ist Ihr zuverlässiges Bauunternehmen für Malerarbeiten, Trockenbau, 
      Stuck- und Putzarbeiten sowie Fassadensanierungen in Fulda und Umgebung. 
      Unser erfahrenes Team bietet höchste Qualität und setzt Ihre Visionen präzise um. 
      Mit offener Kommunikation und innovativen Techniken schaffen wir beeindruckende Räume und 
      bieten umfassende Baubetreuung für private und gewerbliche Kunden.
      </p>
      {/* <div className="flex mt-10 justify-center">
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
      </div> */}
    </div>
      );
    };

export default HeroSection;