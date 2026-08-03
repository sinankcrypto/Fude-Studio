// Constants for Our Clients Section with icons from assets/icons

import joAndJoIcon from "../assets/icons/Jo and Jo.png";
import ablvIcon from "../assets/icons/ABLV.png";
import airBalticIcon from "../assets/icons/AirBaltic.png";
import tnIcon from "../assets/icons/TN.png";
import biteIcon from "../assets/icons/bite.png";
import dnbIcon from "../assets/icons/DNB.png";

export const CLIENTS_SECTION = {
  title: "OUR CLIENTS",
  description:
    "COMMITMENT TO THE HIGHEST QUALITY PRODUCTION STANDARDS, A BROAD EXPERTISE, AND A GENUINE STRIVE TO HELP OUR CLIENTS HAVE SECURED US STRATEGIC COOPERATION WITH MARKET-LEADING COMPANIES IN MANY SECTORS AND REGIONS.",
};

// Icons dataset for Row 1 Carousel (animates Right)
export const CLIENTS_ROW_1 = [
  {
    id: "jo-and-jo-1",
    name: "JO & JO",
    image: joAndJoIcon,
    isHighlighted: false, // Set to false to avoid permanent white card
    invert: true, // Invert white PNG logo to sharp black text
  },
  {
    id: "ablv-1",
    name: "ABLV",
    image: ablvIcon,
    isHighlighted: false,
  },
  {
    id: "air-baltic-1",
    name: "airBaltic",
    image: airBalticIcon,
    isHighlighted: false,
  },
  {
    id: "tn-1",
    name: "TN",
    image: tnIcon,
    isHighlighted: false,
  },
  {
    id: "bite-1",
    name: "bitė",
    image: biteIcon,
    isHighlighted: false,
  },
  {
    id: "dnb-1",
    name: "DnB",
    image: dnbIcon,
    isHighlighted: false,
  },
];

// Icons dataset for Row 2 Carousel (animates Left)
export const CLIENTS_ROW_2 = [
  {
    id: "tn-2",
    name: "TN",
    image: tnIcon,
    isHighlighted: false,
  },
  {
    id: "bite-2",
    name: "bitė",
    image: biteIcon,
    isHighlighted: false,
  },
  {
    id: "dnb-2",
    name: "DnB",
    image: dnbIcon,
    isHighlighted: false,
  },
  {
    id: "ablv-2",
    name: "ABLV",
    image: ablvIcon,
    isHighlighted: false,
  },
  {
    id: "air-baltic-2",
    name: "airBaltic",
    image: airBalticIcon,
    isHighlighted: false,
  },
  {
    id: "jo-and-jo-2",
    name: "JO & JO",
    image: joAndJoIcon,
    isHighlighted: false,
    invert: true,
  },
];

// Default Export of single list for fallback static view if needed
export const CLIENTS_LIST = [...CLIENTS_ROW_1, ...CLIENTS_ROW_2];
