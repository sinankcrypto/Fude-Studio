import { useState, useEffect } from "react";
import { NAVBAR_OPTIONS } from "../../constants/navbar";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/Fude-logo.png";

const DesktopMenu = ({ activeSection, onNavClick }) => {
    return (
        <nav className="hidden md:flex items-center justify-between w-full">
            {NAVBAR_OPTIONS.map((option) => {
                const isActive = activeSection === option.link;
                return (
                    <motion.a
                        key={option.link}
                        href={`/#${option.link}`}
                        onClick={(e) => onNavClick(e, option.link)}
                        className={`text-[14px] tracking-tight uppercase py-1 transition-all duration-300 ease-out cursor-pointer ${
                            isActive
                                ? "font-semibold text-[#2A2A2A] opacity-100"
                                : "font-normal text-[#2A2A2A]/55 hover:text-[#2A2A2A] hover:opacity-100"
                        }`}
                    >
                        {option.name}
                    </motion.a>
                );
            })}
        </nav>
    );
};

const MobileMenu = ({ setIsOpen, isOpen }) => {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2A2A2A] focus:outline-none hover:bg-black/5 rounded-md transition-colors"
            aria-label="Toggle menu"
        >
            <svg
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
            </svg>
        </button>
    );
};

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("about");

    // Scroll spy to highlight the section currently in view
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 140; // Offset for navbar height

            for (let i = NAVBAR_OPTIONS.length - 1; i >= 0; i--) {
                const sectionId = NAVBAR_OPTIONS[i].link;
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.getElementById(link);
        if (element) {
            const yOffset = -80; // Offset for navbar height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sticky top-0 z-50 bg-[#F0F0F0]/95 backdrop-blur-md px-6 lg:px-[60px]"
        >
            <div className="mx-auto w-full max-w-[1320px] flex items-center justify-between h-16 md:h-20 border-b border-[#DDD]">
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Fude Logo"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-[84px] md:w-[88px] h-[28px] md:h-[30px] object-contain cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />
                
                {/* Desktop Menu - Starts at 56% of max-w-[1320px] container */}
                <div className="hidden md:flex items-center lg:w-[44%]">
                    <DesktopMenu activeSection={activeSection} onNavClick={handleNavClick} />
                </div>

                {/* Mobile Menu Button */}
                <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>

            {/* Mobile Dropdown Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute top-full left-0 w-full bg-[#F0F0F0]/95 backdrop-blur-lg border-b border-[#DDD] md:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col px-6 py-6 gap-4">
                            {NAVBAR_OPTIONS.map((option) => {
                                const isActive = activeSection === option.link;
                                return (
                                    <a
                                        key={option.link}
                                        href={`/#${option.link}`}
                                        onClick={(e) => handleNavClick(e, option.link)}
                                        className={`text-sm uppercase py-1 border-b border-[#2A2A2A]/10 transition-colors ${
                                            isActive
                                                ? "font-semibold text-[#2A2A2A]"
                                                : "font-normal text-[#2A2A2A]/60"
                                        }`}
                                    >
                                        {option.name}
                                    </a>
                                );
                            })}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
