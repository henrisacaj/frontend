import { jobAdversiment } from "../constants";

const Career = () => {
  return (
    <div id="career" className="mt-10">
      <div
        id="servicesSection"
        className="relative mt-20 border-b border-neutral-800 min-h-[550px]"
      >
        <div className="text-center">
          <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-lg font-medium px-2 py-1 uppercase">
            Karriere
          </span>
          <p className="mt-10 text-2xl text-center text-white">
            Wir suchen einen Maler und Lackierer
          </p>
        </div>
        <div className="flex flex-wrap mt-5 lg:mt-10">
          {jobAdversiment.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
              <div className="flex">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                  {feature.icon}
                </div>
                <div>
                  <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                  <ul className="marker:text-neutral-500 list-disc">
                    {feature.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="px-10 mt-10 text-lg">
            Interessiert? Dann freuen wir uns auf Ihre Bewerbung! Bitte senden
            Sie Ihre vollständigen Unterlagen (Anschreiben, Lebenslauf,
            Zeugnisse) per E-Mail an
            <a
              className="hover:text-orange-500"
              href="mailto:bewerbung@sacaj-baudesign.de"
            >
              {" "}
              bewerbung@sacaj-baudesign.de{" "}
            </a>
            .
            <br />
            Für Rückfragen stehen wir Ihnen gerne unter der Telefonnummer{" "}
            <a className="hover:text-orange-500" href="tel:+4917630367555">
              {" "}
              +4917630367555
            </a>{" "}
            zur Verfügung.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
