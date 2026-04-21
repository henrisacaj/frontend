import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Impressum = () => {
  return (
    <>
      <Navbar />
      <div className="container max-w-[1570px] mx-auto pt-16 px-6">
        <h1 className="text-bold text-6xl">Impressum</h1>
        <br />
        <div className="div space-y-4">
          <p className="text-xl">
            Neim Sacaj
            <br />
            Sacaj Baudesign (Einzelunternehmer)
            <br />
            <br />
            36037 Fulda
          </p>

          <h2 className="text-bold text-3xl">Kontakt</h2>

          <p>Telefon: +49 (0) 176 30367555
            <br />
            E-Mail: info@sacaj-baudesign.de</p>

          <h2 className="text-bold text-3xl">EU-Streitschlichtung</h2>

          <p>
            Die Europ&auml;ische Kommission stellt eine Plattform zur
            Online-Streitbeilegung (OS) bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>

          <h2 className="text-bold text-3xl">
            Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
          </h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Impressum;
