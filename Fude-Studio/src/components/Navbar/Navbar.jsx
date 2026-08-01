import { useState } from "react";
import { NAVBAR_OPTIONS } from "../../constants/navbar";

const DesktopMenu = () => {
    return (
        <nav className="hidden md:flex items-center gap-8">
            {NAVBAR_OPTIONS.map((option, index) => (
                <a
                    key={index}
                    href={option.link}
                    className="text-sm font-medium tracking-widest text-muted hover:text-foreground transition-colors duration-200 uppercase relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-foreground after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                    {option.name}
                </a>
            ))}
        </nav>
    );
}

const MobileMenu = ({ setIsOpen, isOpen }) => {
    return <button
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
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#F0F0F0] bg-background/80 backdrop-blur-md border-b border-border/40">
            <div className="mx-auto w-full   px-6 lg:px-16 flex items-center justify-between h-20 md:h-24">
                {/* Logo */}
                <img src="src/assets/logo.png" alt="" className="w-[88px] h-[30px] " />
                <DesktopMenu />
                {/* Mobile Menu Button */}
                <MobileMenu setIsOpen={setIsOpen} isOpen={isOpen} />
            </div>

            {/* Mobile Dropdown Menu */}
            <div
                className={`absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/40 transition-all duration-300 ease-in-out md:hidden ${isOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto visible"
                    : "opacity-0 -translate-y-4 pointer-events-none invisible"
                    }`}
            >
                <nav className="flex flex-col px-6 py-8 gap-6">
                    {NAVBAR_OPTIONS.map((option, index) => (
                        <a
                            key={index}
                            href={option.link}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium tracking-widest text-muted hover:text-foreground transition-colors duration-200 uppercase py-1 border-b border-border/10"
                        >
                            {option.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}
