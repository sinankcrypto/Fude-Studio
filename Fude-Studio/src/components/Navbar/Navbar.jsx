import { useState, useEffect, useRef } from "react";
import { NAVBAR_OPTIONS } from "../../constants/navbar";
import { motion, AnimatePresence } from "motion/react";
import logo from "../../assets/Fude-logo.png";

const DesktopMenu = ({ activeSection, onNavClick }) => {
    return (
        <nav className="hidden min-[1050px]:flex items-center justify-between w-full">
            {NAVBAR_OPTIONS.map((option) => {
                const isActive = activeSection === option.link;
                return (
                    <motion.a
                        key={option.link}
                        href={`/#${option.link}`}
                        onClick={(e) => onNavClick(e, option.link)}
                        className={`text-[14px] tracking-tight uppercase py-1 transition-all duration-200 ease-out cursor-pointer ${isActive
                                ? "font-bold text-[#2A2A2A] opacity-100"
                                : "font-normal text-[#2A2A2A]/55 hover:text-[#2A2A2A] hover:font-bold hover:opacity-100"
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
            className="min-[1050px]:hidden p-2 text-[#2A2A2A] focus:outline-none hover:bg-black/5 rounded-md transition-colors"
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
    const isManualScrollRef = useRef(false);
    const scrollTimeoutRef = useRef(null);

    // Dynamic scroll spy that tracks the active section currently past the navbar reference line
    useEffect(() => {
        const handleScroll = () => {
            if (isManualScrollRef.current) return;

            // If scrolled near bottom of page, activate the last section (contact)
            const scrollBottom = window.innerHeight + window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            if (scrollBottom >= documentHeight - 60) {
                setActiveSection(NAVBAR_OPTIONS[NAVBAR_OPTIONS.length - 1].link);
                return;
            }

            // Reference point in viewport: accounts for 64px mobile / 80px desktop navbar + padding
            const referencePoint = window.innerWidth < 1050 ? 75 : 100;

            let currentActive = NAVBAR_OPTIONS[0].link;

            for (let i = 0; i < NAVBAR_OPTIONS.length; i++) {
                const sectionId = NAVBAR_OPTIONS[i].link;
                const element = document.getElementById(sectionId);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= referencePoint) {
                        currentActive = sectionId;
                    }
                }
            }

            setActiveSection(currentActive);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        };
    }, []);

    const handleNavClick = (e, link) => {
        e.preventDefault();
        // Immediately set the clicked section to active
        setActiveSection(link);
        setIsOpen(false);

        // Lock scroll spy while Lenis smooth scrolls
        isManualScrollRef.current = true;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
            isManualScrollRef.current = false;
            setActiveSection(link);
        }, 1500);

        const element = document.getElementById(link);
        if (element) {
            const offsetValue = window.innerWidth < 1050 ? -64 : -80;
            if (window.lenis) {
                window.lenis.scrollTo(element, {
                    offset: offsetValue,
                    onComplete: () => {
                        isManualScrollRef.current = false;
                        setActiveSection(link);
                    },
                });
            } else {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition + offsetValue,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sticky top-0 z-50 bg-[#F0F0F0]/95 backdrop-blur-md px-6 lg:px-[60px]"
        >
            <div className="w-full flex items-center justify-between h-16 min-[1050px]:h-20 border-b border-[#DDD]">
                {/* Logo */}
                <motion.img
                    src={logo}
                    alt="Fude Logo"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-[84px] min-[1050px]:w-[88px] h-[28px] min-[1050px]:h-[30px] object-contain cursor-pointer"
                    onClick={() => {
                        setActiveSection("about");
                        isManualScrollRef.current = true;
                        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
                        scrollTimeoutRef.current = setTimeout(() => {
                            isManualScrollRef.current = false;
                            setActiveSection("about");
                        }, 1500);

                        if (window.lenis) {
                            window.lenis.scrollTo(0, {
                                onComplete: () => {
                                    isManualScrollRef.current = false;
                                    setActiveSection("about");
                                },
                            });
                        } else {
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                />

                {/* Desktop Menu */}
                <div className="hidden min-[1050px]:flex items-center min-[1050px]:w-[50%] lg:w-[44%]">
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
                        className="absolute top-full left-0 w-full bg-[#F0F0F0] backdrop-blur-lg border-b border-[#DDD] min-[1050px]:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col px-6 py-6 gap-4">
                            {NAVBAR_OPTIONS.map((option) => {
                                const isActive = activeSection === option.link;
                                return (
                                    <a
                                        key={option.link}
                                        href={`/#${option.link}`}
                                        onClick={(e) => handleNavClick(e, option.link)}
                                        className={`text-sm uppercase py-1 border-b border-[#2A2A2A]/10 transition-all duration-200 ${isActive
                                                ? "font-bold text-[#2A2A2A] opacity-100"
                                                : "font-normal text-[#2A2A2A]/60 hover:text-[#2A2A2A] hover:font-bold hover:opacity-100"
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
