import { BadgeEuro, BotMessageSquare, BrickWall, Building, CircleUserRound, Drill, HardHat, HousePlus, Lightbulb, ListChecks, PaintRoller, PaintRollerIcon, ThermometerSun } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const navItems = [
  { label: "Startseite", href: "/home" },
  { label: "Unsere Leistungen", href: "#servicesSection" },
  { label: "Unternehmen", href: "#about" },
  { label: "Projekte", href: "#projects" },
  { label: "Karriere", href: "#career" },
  { label: "Kontakt", href: "#contactForm" },
];


export const features = [
  {
    icon: <PaintRoller />,
    text: "Malerarbeiten",
    description:
      `Unser Malerteam bietet eine breite Palette an Dienstleistungen, um Ihre Innen- und Außenbereiche zu verschönern und zu schützen. 
      Von Innenanstrichen über Fassadenanstriche bis hin zu Lackierarbeiten und Tapezierarbeiten – wir verwenden nur die besten Materialien und Techniken, 
      um ein makelloses und langlebiges Finish zu gewährleisten. 
      Unsere Spachtelarbeiten sorgen für perfekt glatte Oberflächen, die jeder Wand ein hochwertiges Aussehen verleihen.`,
  },
  {
    icon: <Drill />,
    text: "Trockenbau",
    description:
      `Unser Trockenbau-Service umfasst die Erstellung von Wandsystemen, Deckensystemen und den Ausbau von Dachgeschossen. 
      Egal, ob Sie eine neue Wand, eine abgehängte Decke oder eine Sonderkonstruktion benötigen – wir bieten maßgeschneiderte Lösungen, die Ihren Anforderungen entsprechen. 
      Mit unseren Systemwänden schaffen wir flexible und funktionale Raumaufteilungen, die Ihren individuellen Bedürfnissen gerecht werden.`,
  },
  {
    icon: <HardHat />,
    text: "Stuck- und Putzarbeiten",
    description:
      `Mit unseren Stuck- und Putzarbeiten verleihen wir Ihren Innen- und Außenbereichen eine besondere Note. 
      Wir bieten dekorative Stuckelemente für Decken und Fassaden sowie verschiedene Putzarten wie Innenputz, Außenputz, Kalkputze, Lehmputze und Modellierputze an. 
      Unsere hochwertigen Materialien und präzise Handwerkskunst sorgen für langlebige und ästhetisch ansprechende Ergebnisse.`,
  },
  {
    icon: <Building />,
    text: "Fassadentechnik",
    description:
      `Unsere Fassadentechnik umfasst innovative Lösungen zur Verschönerung und Dämmung Ihrer Gebäudefassade. 
      Von der Fassadeverkleidung über Wärmedämmverbundsysteme bis hin zu Außen- und Innendämmungen – wir bieten umfassende Dienstleistungen, 
      die sowohl die Energieeffizienz als auch die Optik Ihrer Immobilie verbessern. 
      Unsere Experten beraten Sie individuell und finden die optimale Lösung für Ihre Fassade.`,
  },
  {
    icon: <HousePlus />,
    text: "Fassadensanierung",
    description:
      `Bei der Fassadensanierung legen wir besonderen Wert auf Energieeffizienz und Nachhaltigkeit. 
      Durch den Einsatz modernster Techniken und Materialien sanieren wir Ihre Fassade fachgerecht und sorgen dafür, dass Ihr Gebäude energetisch auf dem neuesten Stand ist. 
      Unsere Sanierungsmaßnahmen tragen nicht nur zur Reduzierung Ihrer Energiekosten bei, sondern erhöhen auch den Wert und die Lebensdauer Ihrer Immobilie.`,
  },
  {
    icon: <Lightbulb />,
    text: "Optimierung und Beratung",
    description:
      `Unser Service umfasst umfassende Beratungs- und Optimierungsleistungen für Ihre Bau- und Renovierungsprojekte. 
      Wir analysieren Ihre Bedürfnisse und bieten maßgeschneiderte Lösungen, die sowohl ästhetisch als auch funktional überzeugen. 
      Unser Ziel ist es, Ihre Visionen zu realisieren und gleichzeitig die Effizienz und Nachhaltigkeit Ihrer Projekte zu maximieren. 
      Vertrauen Sie auf unsere Expertise und Erfahrung für optimale Ergebnisse.`,
  },
];

export const jobAdversiment = [
  {
    icon: <ListChecks />,
    text: "Ihre Aufgaben:",
    items: [
        "Durchführung von Maler- und Lackierarbeiten im Innen- und Außenbereich",
        "Vorbereitung der Arbeitsflächen (Schleifen, Spachteln, Grundieren)",
        "Tapezierarbeiten",
        "Gestaltung und Instandhaltung von Oberflächen",
        "Anwendung verschiedener Maltechniken"
    ]
  },
  {
    icon: <CircleUserRound />,
    text: "Ihr Profil:",
    items: [
      "Abgeschlossene Berufsausbildung als Maler und Lackierer oder vergleichbare Qualifikation",
      "Berufserfahrung in den oben genannten Tätigkeitsfeldern von Vorteil",
      "Sorgfältige und selbstständige Arbeitsweise",
      "Teamfähigkeit und Zuverlässigkeit",
      "Gute Deutschkenntnisse"
    ]  
  },
  {
    icon: <BadgeEuro />,
    text: "Wir bieten:",
    items: [
      "Ein unbefristetes Arbeitsverhältnis",
      "Attraktive Vergütung und Sozialleistungen",
      "Ein motiviertes und freundliches Team",
      "Vielfältige und abwechslungsreiche Projekte",
      "Möglichkeiten zur beruflichen Entwicklung"
    ]
  }
];

export const communityLinks = [
  { href: "/impressum", text: "Impressum" },
  { href: "/datenschutz", text: "Datenschutz" }
];
