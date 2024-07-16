import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="space-y-2">
          <h3 className="text-md font-semibold mb-4">Anschrift</h3>
          <p>
            Sacaj Baudesign
          </p>
          <p>
            In den Auegärten
          </p>
          <p>
            36037 Fulda
          </p>
        </div>
        <div className="space-y-2">
          <h3 className="text-md font-semibold mb-4">Kontakt</h3>
          <p>Tel: <a href="tel:+4917630367555">017630367555</a></p>
          <p>E-Mail: <a href="mailto:info@sacaj-baudesign.de">info@sacaj-baudesign.de</a></p>

        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Rechtliches</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;