import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex items-center justify-center h-full">
          <div className="space-y-2 text-center">
            <h3 className="text-md font-semibold mb-4">Anschrift</h3>
            <p className="text-neutral-300">
              Sacaj Baudesign <br />
              In den Auegärten <br />
              36037 Fulda
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="space-y-2 text-center">
            <h3 className="text-md font-semibold mb-4">Kontakt</h3>
            <p className="text-neutral-300">
              Tel:{" "}
              <a href="tel:+4917630367555" className="hover:text-orange-500">
                017630367555
              </a>
            </p>
            <p className="text-neutral-300">
              E-Mail:{" "}
              <a
                href="mailto:info@sacaj-baudesign.de"
                className="hover:text-orange-500"
              >
                info@sacaj-baudesign.de
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center h-full">
          <div>
            <h3 className="text-md font-semibold mb-4 text-center">
              Rechtliches
            </h3>
            <ul className="space-y-2 text-center">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-neutral-300 hover:text-orange-500"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;