import jojoImage from "../assets/images/JO-AND-JO-image.jpeg";
import breenImage from "../assets/images/Breen-image.jpeg";
import chemzolImage from "../assets/images/Chemzol-image.jpeg";
import xImage from "../assets/images/X-image.jpeg";

const portfolio_video_url = 'https://res.cloudinary.com/dpu2frcru/video/upload/v1786809717/WEB_PORTFOLIO_002_blcamk.mp4'

export const pageContent = {
    heading: ["Explore our work.", "Experience our ", "creativity"],
    description:
        "Our portfolio showcases the creative work we deliver for ambitious brands, businesses, and organizations, combining strategic branding, graphic design, web design, and motion solutions to create meaningful visual experiences that strengthen brand identity, communicate clearly, engage audiences, and support business growth across every platform and digital touchpoint with purpose.",
    button: "View our portfolio",
    portfolio_video_url
};

export const projects = [
    {
        title: "Jojo",
        category: "Brand identity · Culture",
        image: jojoImage,
        accent: "#6d182d",
    },
    {
        title: "Breen",
        category: "Strategy · Hospitality",
        image: breenImage,
        accent: "#b78d68",
    },
    {
        title: "Chemzol",
        category: "Packaging · Industry",
        image: chemzolImage,
        accent: "#1e83c8",
    },
    {
        title: "X marks",
        category: "Digital · Technology",
        image: xImage,
        accent: "#241453",
    },
];