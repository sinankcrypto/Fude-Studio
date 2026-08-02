import { useState } from "react";
import { NAVBAR_OPTIONS } from "../../constants/navbar";
import { motion, AnimatePresence } from "motion/react";

const DesktopMenu = () => {
    return (
        <nav className="hidden md:flex items-center  gap-8">
            {NAVBAR_OPTIONS.map((option, index) => (
                <motion.a
                    key={index}
                    href={`#${option.link}`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.08, duration: 0.4, ease: "easeOut" }}
                    className="text-[14px] font-extralight tracking-tight text-[#2A2A2A] hover:text-[#2A2A2A] transition-colors duration-200 uppercase relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1.5px] after:bg-[#2A2A2A] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                    {option.name}
                </motion.a>
            ))}
        </nav>
    );
}

const MobileMenu = ({ setIsOpen, isOpen }) => {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground focus:outline-none hover:bg-black/5 rounded-md transition-colors"
            aria-label="Toggle menu"
        >
            <svg
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
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
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="sticky top-0 z-50 bg-[#F0F0F0]/90 backdrop-blur-md border-b-2 border-[#2A2A2A]/5"
        >
            <div className="mx-auto w-full px-6 lg:px-16 flex items-center justify-between h-20 md:h-24">
                {/* Logo */}
                <motion.img
                    src="src/assets/logo.png"
                    alt="Fude Logo"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-[88px] h-[30px] object-contain cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                />
                <DesktopMenu />
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
                        className="absolute top-full left-0 w-full bg-[#F0F0F0]/95 backdrop-blur-lg border-b border-[#2A2A2A]/5 md:hidden overflow-hidden"
                    >
                        <nav className="flex flex-col px-6 py-8 gap-6">
                            {NAVBAR_OPTIONS.map((option, index) => (
                                <a
                                    key={index}
                                    href={`#${option.link}`}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-light tracking-tight text-[#2A2A2A] hover:text-[#2A2A2A] transition-colors duration-200 uppercase py-1 border-b border-[#2A2A2A]/10"
                                >
                                    {option.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
