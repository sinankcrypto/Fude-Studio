// Constants for Our Clients Section with icons from assets/icons

import alAseelIcon from "../assets/icons/AlAseel-logo.png";
import breenIcon from "../assets/icons/Breen-logo.png";
import clearLightIcon from "../assets/icons/ClearLight-logo.png";
import couldBeIcon from "../assets/icons/CouldBe-logo.png";
import ezflowIcon from "../assets/icons/Ezflow-logo.png";
import jrmIcon from "../assets/icons/JRM-logo.png";
import jamesIcon from "../assets/icons/James-logo.png";
import joAndJoIcon from "../assets/icons/Jo&Jo-logo.png";
import lunaIcon from "../assets/icons/Luna-logo.png";
import luxmarIcon from "../assets/icons/Luxmar-logo.png";
import mjiFarmIcon from "../assets/icons/MJIfarm-logo.png";
import maxusIcon from "../assets/icons/Maxus-logo.png";
import mazinIcon from "../assets/icons/Mazin-logo.png";
import mentorixIcon from "../assets/icons/Mentorix-logo.png";
import rasdIcon from "../assets/icons/Rasd-logo.png";
import wingsIcon from "../assets/icons/Wings-logo.png";
import wreateIcon from "../assets/icons/Wreate-logo.png";
import chemzolIcon from "../assets/icons/chemzol-logo.png";

export const CLIENTS_SECTION = {
  title: "OUR CLIENTS",
  description:
    "OUR CREATIVE EXCELLENCE AND CLIENT-FOCUSED APPROACH HAVE EARNED FUDE STUDIO TRUSTED PARTNERSHIPS WITH LEADING BUSINESSES ACROSS DIVERSE INDUSTRIES.",
};

// Icons dataset for Row 1 Carousel (animates Right)
export const CLIENTS_ROW_1 = [
  {
    id: "al-aseel",
    name: "Al Aseel",
    image: alAseelIcon,
  },
  {
    id: "breen",
    name: "Breen",
    image: breenIcon,
  },
  {
    id: "clear-light",
    name: "Clear Light",
    image: clearLightIcon,
  },
  {
    id: "could-be",
    name: "Could Be",
    image: couldBeIcon,
  },
  {
    id: "ezflow",
    name: "Ezflow",
    image: ezflowIcon,
  },
  {
    id: "jrm",
    name: "JRM",
    image: jrmIcon,
  },
  {
    id: "james",
    name: "James",
    image: jamesIcon,
  },
  {
    id: "jo-and-jo",
    name: "JO & JO",
    image: joAndJoIcon,
  },
  {
    id: "luna",
    name: "Luna",
    image: lunaIcon,
  },
];

// Icons dataset for Row 2 Carousel (animates Left)
export const CLIENTS_ROW_2 = [
  {
    id: "luxmar",
    name: "Luxmar",
    image: luxmarIcon,
  },
  {
    id: "mji-farm",
    name: "MJI Farm",
    image: mjiFarmIcon,
  },
  {
    id: "maxus",
    name: "Maxus",
    image: maxusIcon,
  },
  {
    id: "mazin",
    name: "Mazin",
    image: mazinIcon,
  },
  {
    id: "mentorix",
    name: "Mentorix",
    image: mentorixIcon,
  },
  {
    id: "rasd",
    name: "Rasd",
    image: rasdIcon,
  },
  {
    id: "wings",
    name: "Wings",
    image: wingsIcon,
  },
  {
    id: "wreate",
    name: "Wreate",
    image: wreateIcon,
  },
  {
    id: "chemzol",
    name: "Chemzol",
    image: chemzolIcon,
  },
];

// Default Export of single list for fallback static view if needed
export const CLIENTS_LIST = [...CLIENTS_ROW_1, ...CLIENTS_ROW_2];
