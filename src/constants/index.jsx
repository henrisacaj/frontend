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
      `Unser erfahrenes Malerteam in Fulda bietet eine umfassende Palette an Malerarbeiten für Innen- und Außenbereiche. Von Wohnungsrenovierungen, Innenanstrichen, Fassadenanstrichen bis hin zu Lackierarbeiten und Tapzierarbeiten – wir verwenden nur die besten Materialien und Techniken, um ein makelloses und langlebiges Finish zu gewährleisten. Unsere Spachtelarbeiten sorgen für perfekt glatte Oberflächen, die jeder Wand ein hochwertiges Aussehen verleihen. Wir bieten zudem Farbberatungen an, um Ihre Vision optimal umzusetzen.`,
  },
  {
    icon: <Drill />,
    text: "Trockenbau",
    description:
      `Unser Trockenbau-Service umfasst die Erstellung von Wandsystemen, Deckensystemen und den Ausbau von Dachgeschossen. Egal, ob Sie eine neue Wand, eine abgehängte Decke oder eine Sonderkonstruktion benötigen – wir bieten maßgeschneiderte Lösungen, die Ihren Anforderungen entsprechen. Mit unseren Systemwänden schaffen wir flexible und funktionale Raumaufteilungen, die sowohl für Wohnungsrenovierungen als auch für schlüsselfertige Projekte ideal sind.`,
  },
  {
    icon: <HardHat />,
    text: "Stuck- und Putzarbeiten",
    description:
      `Unsere Stuck- und Putzarbeiten in Fulda geben Ihren Innen- und Außenbereichen eine stilvolle und individuelle Note. Ob dekorative Stuckelemente für Decken, hochwertige Kalk-, Lehm- oder Modellierputze – wir setzen auf präzise Handwerkskunst und Materialien von höchster Qualität, um langlebige und ästhetisch anspruchsvolle Ergebnisse zu erzielen. Lassen Sie uns Ihre Wände und Fassaden stilvoll in Szene setzen.`,
  },
  {
    icon: <Building />,
    text: "Fassadentechnik",
    description:
      `Unsere Fassadentechnik umfasst innovative Lösungen zur Verschönerung und Dämmung Ihrer Gebäudefassade. Von der Fassadenverkleidung über Wärmedämmverbundsysteme (WDVS) bis hin zu Außen- und Innendämmungen – wir bieten umfassende Dienstleistungen, die sowohl die Energieeffizienz als auch die Optik Ihrer Immobilie verbessern. Unsere Experten beraten Sie individuell und finden die optimale Lösung für Ihre Fassade, damit Sie von einer langlebigen und ansprechenden Außengestaltung profitieren.`,
  },
  {
    icon: <HousePlus />,
    text: "Fassadensanierung",
    description:
      `Bei der Fassadensanierung legen wir besonderen Wert auf Energieeffizienz und Nachhaltigkeit. Durch den Einsatz moderner Techniken und Materialien sanieren wir Ihre Fassade fachgerecht und sorgen dafür, dass Ihr Gebäude energetisch auf dem neuesten Stand ist. Unsere Sanierungsmaßnahmen tragen nicht nur zur Reduzierung Ihrer Energiekosten bei, sondern erhöhen auch den Wert und die Lebensdauer Ihrer Immobilie. Vertrauen Sie auf unsere Expertise für Fassadensanierungen in Fulda und Umgebung.`,
  },
  {
    icon: <Lightbulb />,
    text: "Optimierung und Beratung",
    description:
      `Unser Service umfasst umfassende Beratungs- und Optimierungsleistungen für Ihre Bau- und Renovierungsprojekte. Wir analysieren Ihre Bedürfnisse und bieten maßgeschneiderte Lösungen, die sowohl ästhetisch als auch funktional überzeugen. Unser Ziel ist es, Ihre Visionen zu realisieren und gleichzeitig die Effizienz und Nachhaltigkeit Ihrer Projekte zu maximieren. Vertrauen Sie auf unsere Erfahrung, um energetische Sanierungen und Fassadenoptimierungen professionell umzusetzen.`,
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
