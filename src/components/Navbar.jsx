import React, { useState, useEffect } from "react";
import { HandHelping, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Programs", href: "#programs" },
        { name: "Impact", href: "#impact" },
        { name: "Stories", href: "#stories" },
        { name: "Gallery", href: "#gallery" },
        { name: "Get Involved", href: "#get-involved" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-[60] transition-all duration-700 ${isScrolled
                ? "bg-white/90 backdrop-blur-md py-4 shadow-md opacity-100 translate-y-0"
                : "bg-transparent py-6 opacity-0 -translate-y-full pointer-events-none"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <div className="flex items-center gap-2 group cursor-pointer">
                    <div className="bg-primary p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                        <HandHelping className="text-secondary w-6 h-6" />
                    </div>
                    <span className={`font-display text-xl font-extrabold tracking-tight ${isScrolled ? "text-primary" : "text-white"}`}>
                        NECESSARY <span className="text-secondary">AID</span>
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`font-medium transition-colors hover:text-secondary ${isScrolled ? "text-text-main" : "text-white"
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="btn-primary py-2 px-6 text-sm">Donate Now</button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-primary"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled ? "text-primary" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled ? "text-primary" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 bg-primary z-40 transition-transform duration-500 md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white text-2xl font-display font-bold hover:text-secondary"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="btn-secondary">Donate Now</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
