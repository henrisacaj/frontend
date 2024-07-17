import { BotMessageSquare, BrickWall, Building, Drill, PaintRoller, PaintRollerIcon, ThermometerSun } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Startseite", href: "#" },
  { label: "Unsere Leistungen", href: "#servicesSection" },
  { label: "Unternehmen", href: "#about" },
  { label: "Projekte", href: "#" },
  { label: "Kontakt", href: "#contactForm" },
];


export const features = [
  {
    icon: <PaintRoller />,
    text: "Malerarbeiten",
    description:
      "Innenanstriche, Fassadenanstriche, Lackierarbeiten, Tapezierarbeiten, Spachtelarbeiten",
  },
  {
    icon: <Drill />,
    text: "Trockenbau",
    description:
      "Trockenbau-Wandsysteme, Trockenbau-Deckensysteme, Dachgeschossausbau, Sonderkonstruktion, Systemwände",
  },
  {
    icon: <ShieldHalf />,
    text: "Stuck- und Putzarbeiten",
    description:
      "Innenputz, Außenputz, Kalkputze, Lehmputze und Modellierputze",
  },
  {
    icon: <ThermometerSun />,
    text: "Wärmedämmung",
    description:
      "Wärmedämmverbundsysteme, Außendämmung, Innendämmung",
  },
  {
    icon: <Building />,
    text: "Fassadentechnik",
    description:
      "ASDASFAASDGADSFASDASD",
  },
  {
    icon: <GlobeLock />,
    text: "Fassadensanierung",
    description:
      "ASDASDASDASDASDASDA",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Impressum" },
  { href: "#", text: "Datenschutz" }
];
